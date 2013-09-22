var spawn = require('child_process').spawn,
    color = require('./color.js'),
    register = {},
    add = function (testClass, coveredClass) {
      if (!register.hasOwnProperty(testClass)) {
        register[testClass] = [];
      }
      register[testClass].push(testClass);
      if (!register.hasOwnProperty(coveredClass)) {
        register[coveredClass] = [];
      }
      register[coveredClass].push(testClass);
    },
    readResults = function (line, path) {
      var regex = /([a-zA-Z0-9\.\/]+):(\d+):.*@covers[\s]+[\\]?([a-zA-Z0-9\.\\\/]+)[::]?/gi,
          match = regex.exec(line);
      if (match !== null) {
        testClass = match[1];
        coveredClass = path + '/' + match[3].replace('\\', '/') + '.php';
        add(testClass, coveredClass);
      }
    };

exports.getRegister = function () {
  return register;
};

exports.scan = function (paths, finishedCallback) {
  console.log('Scanning project...');
  for (key in paths) {
    if (paths.hasOwnProperty(key)) {
      grep = spawn('grep', ['-rn', '@covers', paths[key]]);
      grep.stdout.on('data', function (data) {
        matches = data.toString().split('\n');
        for (line in matches) {
          if (matches.hasOwnProperty(line)) {
            readResults(matches[line], paths[key]);
          }
        }
      });

      grep.on('close', function (code) {
        finishedCallback();
      });
    }
  }
};