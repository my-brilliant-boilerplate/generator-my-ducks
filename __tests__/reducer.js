'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ducks-modular-redux:reducer', () => {
  const reducer = 'servers';

  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/reducer'))
      .withLocalConfig({ srcPath: 'src' })
      .withArguments([reducer]);
  });

  it('creates files', () => {
    const basePath = `src/modules/${reducer}`;
    const expectedFiles = ['actions', 'index', 'constants', 'selectors'];
    const files = expectedFiles.map(file => {
      return `${basePath}/${file}.js`;
    });

    assert.file(files);
  });
});
