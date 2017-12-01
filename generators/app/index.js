'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay('Welcome to the stunning ' + chalk.red('my-ducks') + ' generator!'));

    const prompts = [
      {
        type: String,
        name: 'srcPath',
        message: 'Name of application directory',
        default: 'src',
        store: true
      },
      {
        type: String,
        name: 'reducers',
        message: 'Reducers names (comma to split)'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this._parseReducers();
    this._createStore();
    this._createRootReducer();
    this._createReducers();
  }

  _parseReducers() {
    let reducerList = [];
    if (this.props.reducers) {
      reducerList = this.props.reducers.split(/\s*,\s*/g);
    }

    this.props.reducers = reducerList;
  }

  _createStore() {
    this.fs.copy(
      this.templatePath('store.js'),
      this.destinationPath(`${this.props.srcPath}/store/index.js`)
    );
  }

  _createRootReducer() {
    const tpl = {
      reducers: this.props.reducers
    };

    this.fs.copyTpl(
      this.templatePath('rootReducer.js'),
      this.destinationPath(`${this.props.srcPath}/modules/rootReducer.js`),
      tpl
    );
  }

  _createReducers() {
    this.props.reducers.map(reducer => {
      return this.composeWith(require.resolve('../reducer'), {
        arguments: [reducer],
        srcPath: this.props.srcPath
      });
    });
  }
};
