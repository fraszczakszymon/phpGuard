(function() {
  var program = require('commander'),
      config = require('./configReader.js'),
      tester = require('./tester.js'),
      scan = require('./scanner.js').scan,
      info = require('../package.json'),
      watch = require('./watcher.js').watch;

config.load();

program.version('phpGuard v' + info.version)
       .option('-i, --init', 'creates local configuration')
       .option('-t, --test [value]', 'type of phpunit test (defined in configuration)')
       .parse(process.argv);

tester.setTestType(program.test);

if (program.args.length === 0) {
  scan(watch);
} else if (program.test) {
  scan(watch);
} else if (program.init) {
  console.log('Creating configuration file will be available soon...')
}
})(); 