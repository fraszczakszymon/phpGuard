(function() {
  var scanner = require('./scanner.js'),
      watcher = require('./watcher.js'),
      color = require('./color.js'),
      info = require('../package.json'),
      paths = ['src'];

  console.log(color.yellowBold + 'phpGuard ' + info.version + color.reset);

  var watcherCallback = function () {
    watcher.watch(paths, scanner.getRegister());
  }
  scanner.scan(paths, watcherCallback);
}).call(this)