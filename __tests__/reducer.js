'use strict';
const assert = require('yeoman-assert');
const helper = require('./helpers/index.js');
const utils = require('./helpers/utils.js');
const changeCase = require('change-case');

let reducer;
let srcPath;
let filenames;
let expectedFiles;
const filenamesForListReducer = ['byId/index', 'byId/selectors'];
const baseFilenames = [
  'actions',
  'index',
  'index.test',
  'constants',
  'selectors',
  'selectors.test'
];

describe('generator-my-ducks:reducer', () => {
  beforeEach(() => {
    reducer = 'server';
    srcPath = 'src';
    filenames = [...baseFilenames, ...filenamesForListReducer];
    expectedFiles = filenames.map(filename =>
      utils.getFilePath({
        srcPath,
        reducerName: reducer,
        filename
      })
    );
  });

  describe('with config', () => {
    it('creates files', done => {
      helper.reducer({
        options: { srcPath },
        args: [reducer],
        done: () => {
          assert.file(expectedFiles);
          assert.fileContent(
            utils.getFilePath({
              srcPath,
              reducerName: reducer,
              filename: 'actions'
            }),
            `update${changeCase.pascalCase(reducer)}`
          );

          done();
        }
      });
    });

    it('creates reducer for single element', done => {
      reducer = 'auth';
      const single = true;
      let expectedFiles = baseFilenames.map(filename =>
        utils.getFilePath({
          srcPath,
          reducerName: reducer,
          single: true,
          filename
        })
      );
      helper.reducer({
        options: { srcPath, single },
        args: [reducer],
        done: () => {
          assert.file(expectedFiles);
          assert.fileContent(
            utils.getFilePath({
              srcPath,
              reducerName: reducer,
              single,
              filename: 'actions'
            }),
            `add${changeCase.pascalCase(reducer)}`
          );

          done();
        }
      });
    });
  });

  describe('without config', () => {
    it('with srcPath in option', done => {
      srcPath = 'app';
      expectedFiles = baseFilenames.map(filename =>
        utils.getFilePath({
          srcPath,
          reducerName: reducer,
          filename
        })
      );
      expectedFiles.push('.yo-rc.json');

      helper.reducer({
        options: { srcPath },
        args: [reducer],
        done: () => {
          assert.file(expectedFiles);
          assert.fileContent(expectedFiles[expectedFiles.length - 1], srcPath);

          done();
        }
      });
    });

    it('with default srcPath in option', done => {
      expectedFiles = baseFilenames.map(filename =>
        utils.getFilePath({
          srcPath,
          reducerName: reducer,
          filename
        })
      );
      expectedFiles.push('.yo-rc.json');

      helper.reducer({
        args: [reducer],
        done: () => {
          assert.file(expectedFiles);
          assert.fileContent(expectedFiles[expectedFiles.length - 1], srcPath);

          done();
        }
      });
    });
  });
});
