'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', { type: String, required: true });
  }

  writing() {
    const path = `${this.config.get('srcPath')}/modules/${this.arguments[0]}`;
    console.log(path);
    this.fs.copy(this.templatePath('**'), this.destinationPath(path));
  }
};
