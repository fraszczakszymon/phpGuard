var watchr = require('watchr'),
    exec = require('child_process').exec,
    sys = require('sys'),
    color = require('./color.js');

function puts(error, stdout, stderr) {
  sys.puts(stdout) 
}

exports.watch = function (paths, register) {
  watchr.watch({
    paths: paths,
    listeners: {
      watching: function(err, watcherInstance, isWatching) {
        console.log('Watching...');
      },
      change: function(changeType, filePath, fileCurrentStat, filePreviousStat) {
        var tests = '';
        if (register.hasOwnProperty(filePath)) {
          for (testKey in register[filePath]) {
            if (register[filePath].hasOwnProperty(testKey)) {
              tests = register[filePath][testKey] + ' ';
            }
          }
          exec('phpunit ' + tests, puts);
        } else {
          console.log(color.redBold + 'No tests to run for file ' + filePath + '...' + color.reset);
        }
      }
    }
  });
}