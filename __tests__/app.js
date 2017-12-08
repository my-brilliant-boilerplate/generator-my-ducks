'use strict';
const assert = require('yeoman-assert');
const utils = require('./helpers/utils.js');
const helper = require('./helpers/index.js');

const srcPath = 'testSrc';
const reducers = ['servers', 'auth'];

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

describe('generator-my-ducks:app', () => {
  it('should creates all files', done => {
    files.concat(utils.getFileForReducer(srcPath, reducers, reducerFiles));
    helper.app({
      prompts: { srcPath, reducers: reducers.join(',') },
      done: () => {
        assert.file(files);
        done();
      }
    });
  });

  it('should creates files without reducers', done => {
    const filesNotExists = utils.getFileForReducer(srcPath, reducers, reducerFiles);

    helper.app({
      prompts: { srcPath, reducers: '' },
      done: () => {
        assert.file(files);
        assert.noFile(filesNotExists);

        done();
      }
    });
  });
});
