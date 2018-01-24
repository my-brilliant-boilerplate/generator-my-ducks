'use strict';
const assert = require('yeoman-assert');
const helper = require('./helpers/index.js');

let reducer = 'server';
let expectedFiles = [
  'actions',
  'index',
  'index.test',
  'constants',
  'selectors',
  'selectors.test',
  'byId/index',
  'byId/selectors'
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
          assert.fileContent(`${basePath}/actions.js`, 'updateServer');

          done();
        }
      });
    });

    it('creates reducer for single element', done => {
      const expected = files.slice(0, -2);
      helper.reducer({
        options: { srcPath, single: true },
        args: [reducer],
        done: () => {
          assert.file(expected);
          assert.fileContent(`${basePath}/actions.js`, 'addServer');

          done();
        }
      });
    });
  });

  describe('without config', () => {
    it('with srcPath in option', done => {
      srcPath = 'app';
      expectedFiles = [`${srcPath}/modules/${reducer}/actions.js`, '.yo-rc.json'];

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
      expectedFiles = [`src/modules/${reducer}/actions.js`, '.yo-rc.json'];

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
