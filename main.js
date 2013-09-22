(function() {
  var scanner = require('./lib/scanner.js'),
  watcher = require('./lib/watcher.js'),
  color = require('./lib/color.js'),
  paths = ['src'];

  console.log(color.yellowBold + 'phpGuard ver. 0.1' + color.reset);

  var watcherCallback = function () {
    watcher.watch(paths, scanner.getRegister());
  }
  scanner.scan(paths, watcherCallback);
}).call(this)