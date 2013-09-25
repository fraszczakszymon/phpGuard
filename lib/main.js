(function() {
  var program = require('commander'),
      config = require('./configReader.js').get(),
      tester = require('./tester.js'),
      scan = require('./scanner.js').scan,
      watch = require('./watcher.js').watch;

program.version('phpGuard 0.0.3')
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