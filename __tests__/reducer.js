'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const generators = require('./generators-helper.js');

describe('generator-my-ducks:reducer', () => {
  const reducer = 'servers';

  describe('with config', () => {
    beforeAll(() => {
      return helpers
        .run(path.join(__dirname, '../generators/reducer'))
        .withLocalConfig({ srcPath: 'src' })
        .withArguments([reducer]);
    });

    it('creates files', () => {
      const basePath = `src/modules/${reducer}`;
      const expectedFiles = ['actions', 'index', 'index.test', 'constants', 'selectors'];
      const files = expectedFiles.map(file => {
        return `${basePath}/${file}.js`;
      });

      assert.file(files);
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
