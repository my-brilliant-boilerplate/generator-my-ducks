'use strict';
const assert = require('yeoman-assert');
const helper = require('./helpers/index.js');

const reducer = 'servers';
let expectedFiles = [
  'actions',
  'index',
  'index.test',
  'constants',
  'selectors',
  'selectors.test'
];
let srcPath = 'src';
const basePath = `${srcPath}/modules/${reducer}`;
const files = expectedFiles.map(file => {
  return `${basePath}/${file}.js`;
});

describe('generator-my-ducks:reducer', () => {
  describe('with config', () => {
    it('creates files', done => {
      helper.reducer({
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
      helper.reducer({
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
      srcPath = 'app';
      expectedFiles = [`${srcPath}/modules/servers/actions.js`, '.yo-rc.json'];

      helper.reducer({
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
      expectedFiles = [`src/modules/servers/actions.js`, '.yo-rc.json'];

      helper.reducer({
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
