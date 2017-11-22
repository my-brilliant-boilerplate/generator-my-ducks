'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-my-ducks:app', () => {
  let generator;
  const srcPath = 'testSrc';
  const reducers = ['servers', 'auth'];

  beforeAll(() => {
    generator = helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ srcPath, reducers });

    return generator;
  });

  it('creates files', () => {
    const expectedFiles = ['store/index', 'modules/rootReducer'];
    const reducerFiles = ['actions', 'index', 'index.test', 'constants', 'selectors'];
    const files = expectedFiles.map(file => `${srcPath}/${file}.js`);
    files.concat(
      reducers.map(reducer => {
        return reducerFiles.map(file => {
          return `${srcPath}/${reducer}/${file}.js`;
        });
      })
    );

    assert.file(files);
  });

  it('should return reducers names', () => {
    const reducersNames = 'servers, auth,devices';
    const expected = ['servers', 'auth', 'devices'];

    const reducers = generator.generator._filterForReducers(reducersNames);

    expect(reducers).toEqual(expected);
  });
});
