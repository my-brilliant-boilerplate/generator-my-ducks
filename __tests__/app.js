'use strict';
const assert = require('yeoman-assert');
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
        prompts: { srcPath, reducers: reducers.join(',') },
        done: () => {
          assert.file(files);
          done();
        }
      });
    });

    it('files without reducers', done => {
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
});
