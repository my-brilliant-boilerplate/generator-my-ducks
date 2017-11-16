'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const reducerHelper = require('./helper.js');

describe('generator-ducks-modular-redux:reducer', () => {
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
      const expectedFiles = ['actions', 'index', 'constants', 'selectors'];
      const files = expectedFiles.map(file => {
        return `${basePath}/${file}.js`;
      });

      assert.file(files);
    });
  });

  describe('without config', () => {
    it('with srcPath in option', done => {
      const srcPath = 'app';

      reducerHelper.run({ srcPath }, [reducer], () => {
        assert.file(`${srcPath}/modules/servers/actions.js`);
        done();
      });
    });

    it('with default srcPath in option', done => {
      reducerHelper.run({}, [reducer], () => {
        assert.file(`src/modules/servers/actions.js`);
        done();
      });
    });
  });
});
