(function() {
  var scanner = require('./scanner.js'),
      watcher = require('./watcher.js'),
      color = require('./color.js'),
      info = require('../package.json'),
      paths = ['src'];

  console.log(color.blueBold + 'phpGuard ' + color.reset + color.blue + 'v' + info.version + color.reset);

  var watcherCallback = function () {
    watcher.watch(paths, scanner.getRegister());
  }
  scanner.scan(paths, watcherCallback);
})();