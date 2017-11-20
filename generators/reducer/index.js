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
    }

    const reducerName = this.arguments[0];
    const tpl = {
      name: reducerName.toUpperCase()
    };

    const path = `${srcPath}/modules/${this.arguments[0]}`;
    this.fs.copyTpl(this.templatePath('**'), this.destinationPath(path), tpl);
  }
};
