'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', { type: String, required: true });
  }

  writing() {
    const path = `modules/${this.arguments[0]}`;
    this.fs.copy(this.templatePath('reducer/**'), this.destinationPath(path));
  }
};
