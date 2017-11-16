var path = require('path');
var helpers = require('yeoman-test');

module.exports = {
  run: (options, args, done) => {
    helpers
      .run(path.join(__dirname, '../generators/reducer'))
      .withOptions(options)
      .withArguments(args)
      .on('end', done);
  }
};
