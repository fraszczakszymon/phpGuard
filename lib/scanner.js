var config = require('./configReader.js').get(),
    spawn = require('child_process').spawn,
    register = {},

    add = function (testClass, coveredClass) {
      if (!register.hasOwnProperty(testClass)) {
        register[testClass] = [];
      }
      if (!register.hasOwnProperty(coveredClass)) {
        register[coveredClass] = [];
      }

      register[testClass].push(testClass);
      register[coveredClass].push(testClass);
    },

    readResults = function (line, path) {
      var regex = /([a-zA-Z0-9\.\/]+):(\d+):.*@covers[\s]+[\\]?([a-zA-Z0-9\.\\\/]+)[::]?/gi,
          match = regex.exec(line);
      if (match !== null) {
        testClass = match[1];
        coveredClass = path + '/' + match[3].replace(/\\/g, '/') + '.php';
        add(testClass, coveredClass);
      }
    },

    addMatchesToRegister = function (data, path) {
      matches = data.toString().split('\n');
      for (line in matches) {
        if (matches.hasOwnProperty(line)) {
          readResults(matches[line], path);
        }
      }
    };

exports.getRegister = function () {
  return register;
}

exports.scan = function (finishedCallback) {
  register = {};
  console.log('Scanning project...');
  grep = spawn('grep', ['-rn', '@covers', config.baseNamespacePath]);
  grep.stdout.on('data', function (data) {
    addMatchesToRegister(data, config.baseNamespacePath);
  });

  grep.on('close', function (code) {
    finishedCallback();
  });
};