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
  }

  writing() {
    let srcPath = this.config.get('srcPath');
    if (!srcPath) {
      srcPath = this.options.srcPath;
      this.config.set('srcPath', srcPath);
    }

    const path = `${srcPath}/modules/${this.arguments[0]}`;
    const expectedFiles = [
      'actions',
      'index',
      'index.test',
      'constants',
      'selectors',
      'selectors.test'
    ];

    const reducerName = this.arguments[0];
    const tpl = {
      name: reducerName.toUpperCase()
    };

    expectedFiles.map(file => {
      return this.fs.copyTpl(
        this.templatePath(`${file}.js`),
        this.destinationPath(`${path}/${file}.js`),
        tpl
      );
    });
  }
};
