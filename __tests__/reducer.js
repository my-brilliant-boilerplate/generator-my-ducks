'use strict';
const assert = require('yeoman-assert');
const generators = require('./generators-helper.js');

describe('generator-my-ducks:reducer', () => {
  const reducer = 'servers';

  describe('with config', () => {
    it('creates files', done => {
      const srcPath = 'src';
      const basePath = `src/modules/${reducer}`;
      const expectedFiles = [
        'actions',
        'index',
        'index.test',
        'constants',
        'selectors',
        'selectors.test'
      ];
      const files = expectedFiles.map(file => {
        return `${basePath}/${file}.js`;
      });

      generators.reducer({
        options: { srcPath },
        args: [reducer],
        done: () => {
          assert.file(files);
          assert.fileContent(`${basePath}/index.js`, 'handleActions');

          done();
        }
      });
    });

    it('creates reducer without redux-actions module', done => {
      const srcPath = 'src';
      const basePath = `src/modules/${reducer}`;
      const expectedFiles = [
        'actions',
        'index',
        'index.test',
        'constants',
        'selectors',
        'selectors.test'
      ];
      const files = expectedFiles.map(file => {
        return `${basePath}/${file}.js`;
      });

      generators.reducer({
        options: { srcPath, withReduxAction: false },
        args: [reducer],
        done: () => {
          assert.file(files);
          assert.noFileContent(`${basePath}/index.js`, 'handleActions');

          done();
        }
      });
    });
  });

  describe('without config', () => {
    it('with srcPath in option', done => {
      const srcPath = 'app';
      const expectedFiles = [`${srcPath}/modules/servers/actions.js`, '.yo-rc.json'];

      generators.reducer({
        options: { srcPath },
        args: [reducer],
        done: () => {
          assert.file(expectedFiles);
          assert.fileContent(expectedFiles[1], srcPath);

          done();
        }
      });
    });

    it('with default srcPath in option', done => {
      const expectedFiles = [`src/modules/servers/actions.js`, '.yo-rc.json'];

      generators.reducer({
        args: [reducer],
        done: () => {
          assert.file(expectedFiles);
          assert.fileContent(expectedFiles[1], 'src');

          done();
        }
      });
    });
  });
});
