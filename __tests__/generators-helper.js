var path = require('path');
var helpers = require('yeoman-test');

const run = ({ generatorPath, options = {}, args = [], prompts = {}, done }) => {
  helpers
    .run(path.join(__dirname, generatorPath))
    .withOptions(options)
    .withArguments(args)
    .withPrompts(prompts)
    .on('end', done);
};

module.exports = {
  app: ({ options = {}, args = [], prompts = {}, done }) => {
    run({ generatorPath: '../generators/app', options, args, prompts, done });
  },
  reducer: ({ options = {}, args = [], prompts = {}, done }) => {
    run({ generatorPath: '../generators/reducer', options, args, prompts, done });
  }
};
