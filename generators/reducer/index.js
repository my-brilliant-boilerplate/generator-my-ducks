'use strict';
const Generator = require('yeoman-generator');
const path = require('path');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', { type: String, required: true });

    this.option('srcPath', {
      desc: 'Name of application directory',
      type: String,
      default: 'src'
    });
    this.option('withReduxAction', {
      desc: 'Use redux-actions module in reducer',
      alias: 'ra',
      type: Boolean,
      default: true
    });
  }

  writing() {
    let srcPath = this.config.get('srcPath');
    if (!srcPath) {
      srcPath = this.options.srcPath;
      this.config.set('srcPath', srcPath);
    }

    const basePath = `${srcPath}/modules/${this.arguments[0]}`;

    const reducerName = this.arguments[0];
    const tpl = {
      name: reducerName.toUpperCase()
    };

    const files = this._getFileList();
    files.map(file => {
      const filename = path.basename(`${file}.js`);
      return this.fs.copyTpl(
        this.templatePath(`${file}.js`),
        this.destinationPath(`${basePath}/${filename}`),
        tpl
      );
    });
  }

  _getFileList() {
    const reducerFileName = this.options.withReduxAction
      ? 'redux-actions/index'
      : 'index';
    const files = [
      'actions',
      reducerFileName,
      'index.test',
      'constants',
      'selectors',
      'selectors.test'
    ];

    return files;
  }
};
