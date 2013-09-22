(function() {
  var scanner = require('./scanner.js'),
  watcher = require('./watcher.js'),
  color = require('./color.js'),
  paths = ['src'];

  console.log(color.yellowBold + 'phpGuard ver. 0.1' + color.reset);

  var watcherCallback = function () {
    watcher.watch(paths, scanner.getRegister());
  }
  scanner.scan(paths, watcherCallback);
}).call(this)