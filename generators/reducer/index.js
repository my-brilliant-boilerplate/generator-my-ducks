'use strict';
const Generator = require('yeoman-generator');
const pluralize = require('pluralize');
const changeCase = require('change-case');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', { type: String, required: true });

    this.option('srcPath', {
      desc: 'Name of application directory',
      type: String,
      default: 'src'
    });

    this.option('single', {
      desc: 'Reducer for single element',
      type: Boolean,
      default: false
    });
  }

  writing() {
    const basePath = `${this._getSrcPath()}/modules/${this._getReducerName()}`;
    const tplPrefix = this.options.single ? 'single' : 'list';

    const tpl = this._getTpl();
    const files = this._getFileList();
    files.map(file =>
      this.fs.copyTpl(
        this.templatePath(`${tplPrefix}/${file}.js`),
        this.destinationPath(`${basePath}/${file}.js`),
        tpl
      )
    );
  }

  _getSrcPath() {
    let srcPath = this.config.get('srcPath');
    if (!srcPath) {
      srcPath = this.options.srcPath;
      this.config.set('srcPath', srcPath);
    }

    return srcPath;
  }

  _getReducerName() {
    const reducerName = this.options.single
      ? this.arguments[0]
      : pluralize(this.arguments[0]);

    return reducerName;
  }

  _getTpl() {
    const reducerName = this.arguments[0];
    const tpl = {
      name: reducerName,
      upperName: reducerName.toUpperCase(),
      lowerName: reducerName.toLowerCase(),
      capitalazeName: changeCase.pascalCase(reducerName),
      pluralizeLower: pluralize(reducerName).toLowerCase(),
      pluralizeCapitalaze: changeCase.pascalCase(pluralize(reducerName))
    };

    return tpl;
  }

  _getFileList() {
    const files = [
      'actions',
      'index',
      'index.test',
      'constants',
      'selectors',
      'selectors.test'
    ];

    if (!this.options.single) {
      files.push('byId/index');
      files.push('byId/selectors');
    }

    return files;
  }
};
