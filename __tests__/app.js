'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-my-ducks:app', () => {
  const srcPath = 'testSrc';

  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ srcPath });
  });

  it('creates files', () => {
    const expectedFiles = ['store/index', 'modules/rootReducer'];
    const files = expectedFiles.map(file => `${srcPath}/${file}.js`);

    assert.file(files);
  });
});
