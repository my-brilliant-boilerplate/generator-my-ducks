'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay('Welcome to the stunning ' + chalk.red('ducks-modular-redux') + ' generator!')
    );

    const prompts = [
      {
        type: 'String',
        name: 'srcPath',
        message: 'Name of application directory',
        default: 'src',
        store: true
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this._createStore();
    this._createRootReducer();

    // This.composeWith(require.resolve('../reducer'), { arguments: args });
  }

  _createStore() {
    this.fs.copy(
      this.templatePath('store.js'),
      this.destinationPath(`${this.props.srcPath}/store/index.js`)
    );
  }

  _createRootReducer() {
    this.fs.copy(
      this.templatePath('rootReducer.js'),
      this.destinationPath(`${this.props.srcPath}/modules/rootReducer.js`)
    );
  }
};
