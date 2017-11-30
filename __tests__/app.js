'use strict';
const assert = require('yeoman-assert');
const path = require('path');
const helpers = require('yeoman-test');
const utils = require('./helpers/utils.js');
const helper = require('./helpers/index.js');

describe('generator-my-ducks:app', () => {
  const srcPath = 'testSrc';
  const reducers = ['servers', 'auth'];

  describe('should creates', () => {
    const expectedFiles = ['store/index', 'modules/rootReducer'];
    const reducerFiles = [
      'actions',
      'index',
      'index.test',
      'constants',
      'selectors',
      'selectors.test'
    ];
    const files = expectedFiles.map(file => `${srcPath}/${file}.js`);

    it('all files', done => {
      files.concat(utils.getFileForReducer(srcPath, reducers, reducerFiles));
      helper.app({
        prompts: { srcPath, reducers },
        done: () => {
          assert.file(files);
          done();
        }
      });
    });

    it('files without reducers', done => {
      const filesNotExists = utils.getFileForReducer(srcPath, reducers, reducerFiles);

      helper.app({
        prompts: { srcPath, reducers: [] },
        done: () => {
          assert.file(files);
          assert.noFile(filesNotExists);

          done();
        }
      });
    });
  });

  describe('filter for reducers prompt', () => {
    let generator;
    let reducersNames;
    let expected;

    beforeAll(() => {
      generator = helpers
        .run(path.join(__dirname, '../generators/app'))
        .withPrompts({ srcPath, reducers });

      return generator;
    });

    afterAll(() => {
      const reducers = generator.generator._filterForReducers(reducersNames);

      expect(reducers).toEqual(expected);
    });

    it('should return reducers names', () => {
      reducersNames = 'servers, auth,devices';
      expected = ['servers', 'auth', 'devices'];
    });

    it('should return default value', () => {
      reducersNames = '';
      expected = [];
    });
  });
});
