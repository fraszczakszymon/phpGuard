var scanner = require('./src/scanner.js'),
    watcher = require('./src/watcher.js'),
    color = require('./src/color.js'),
    paths = ['phpFilesWithTests'];

console.log(color.yellowBold + 'phpGuard ver. 0.1' + color.reset);

var watcherCallback = function () {
  watcher.watch(paths, scanner.getRegister());
}
scanner.scan(paths, watcherCallback);