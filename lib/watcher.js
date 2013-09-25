var config = require('./configReader.js').get(),
    watchr = require('watchr'),
    scanner = require('./scanner.js'),
    test = require('./tester.js').test;

exports.watch = function () {
  watchr.watch({
    paths: [ config.baseNamespacePath ],
    listeners: {
      watching: function(err, watcherInstance, isWatching) {
        console.log('The scan has been completed. phpGuard is ready to run tests.\n');
      },
      change: function(changeType, filePath, fileCurrentStat, filePreviousStat) {
        if (changeType === 'create') {
          scanner.scan(function () {
            test(filePath, scanner.getRegister());
          });
        } else if (changeType === 'update') {
          test(filePath, scanner.getRegister());
        }
      }
    }
  });
}