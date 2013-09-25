var path = require('path'),
    fs = require('fs'),
    configuration = {};

exports.load = function () {
  if (fs.existsSync("./phpguard.config.json")) {
    configuration = require(path.join(path.dirname(fs.realpathSync("./phpguard.config.json")), 'phpguard.config.json'));
  } else {
    configuration = require(path.join(path.dirname(fs.realpathSync(__filename)), '../phpguard.config.json'));
  }
}


exports.get = function () {
  return configuration;
}