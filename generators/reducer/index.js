'use strict';
const Generator = require('yeoman-generator');

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
    let srcPath = this.config.get('srcPath');
    if (!srcPath) {
      srcPath = this.options.srcPath;
      this.config.set('srcPath', srcPath);
    }

    const basePath = `${srcPath}/modules/${this.arguments[0]}`;
    const prefix = this.options.single ? 'single' : 'list';

    const tpl = this._getTpl();

    const files = this._getFileList();
    files.map(file =>
      this.fs.copyTpl(
        this.templatePath(`${prefix}/${file}.js`),
        this.destinationPath(`${basePath}/${file}.js`),
        tpl
      )
    );
  }

  _getTpl() {
    const reducerName = this.arguments[0];
    const tpl = {
      name: reducerName,
      upperName: reducerName.toUpperCase(),
      lowerName: reducerName.toLowerCase(),
      capitalazeName:
        reducerName.charAt(0).toUpperCase() + reducerName.toLowerCase().slice(1)
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
