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

const wrapper = generatorPath => {
  return ({ options = {}, args = [], prompts = {}, done }) => {
    run({ generatorPath, options, args, prompts, done });
  };
};

module.exports = {
  app: wrapper('../../generators/app'),
  reducer: wrapper('../../generators/reducer')
};
