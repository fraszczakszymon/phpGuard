var config = require('./configReader.js').get(),
    program = require('commander'),
    exec = require('child_process').exec,
    color = require('./colors.js'),
    testType = config.defaultType,
    lastTest = 0,

    prepareTestList = function (linkedTests) {
      var tests = '';
      console.log(color.yellow + 'Linked tests:' + color.reset);
      for (testKey in linkedTests) {
        if (linkedTests.hasOwnProperty(testKey)) {
          tests = linkedTests[testKey] + ' ';
          console.log('  - ' + linkedTests[testKey]);
        }
      }
      return tests;
    },

    runTests = function (linkedTests) {
      var tests = prepareTestList(linkedTests),
          phpunit = '';

      if (config.testTypes.hasOwnProperty(testType)) {
        phpunit = config.testTypes[testType];
      } else {
        console.log(color.failed + "Wrong test type is passed! Check your configuration." + color.reset);
        process.exit();
      }

      exec(phpunit + ' ' + tests, function (error, stdout, stderr) {
        console.log(stdout);
      });
    };

exports.setTestType = function (type) {
  if (type !== undefined) {
    testType = type;
  }
}

exports.test = function (changedFile, register) {
  var now = new Date().getTime();
  if (now > lastTest + config.delayBetweenTests) {
    lastTest = now;
    console.log('File ' + changedFile + ' has been modified.');
    if (register.hasOwnProperty(changedFile)) {
      runTests(register[changedFile], testType);
    } else {
      console.log(color.failed + 'No tests to run for file ' + changedFile + '.' + color.reset);
    }
  }
}