#!/usr/bin/env node

const program = require('commander');
const { version } = require('../../package.json');

// version dependent on node and basic details
program
  .version(version, '-v, --version', 'show version')
  .description('summarize the data in csv')
  .usage('command [options] <file-path>');

const testFunction = (s: any) => console.log('tstfunc', s);
const testFunction2 = (s: any, h: any) => {
  console.log('tstfusssnc', s, h);
  // let output;
  // if (!h) {
  //   output = `summarized-${new Date()}`;
  // }
  console.log('out', s, h);
};

//main command
program
  .command('summarize')
  .requiredOption('-i, --input <file>', 'csv file path must be specified', testFunction);

// options available
program
  .option('-d, --debug', 'output extra debugging')
  .option(
    '-o, --output [output file]',
    'csv output file name',
    testFunction2,
    `summarized-${Date.now()}.csv`,
  );

// custom help
program.on('--help', () => {
  console.log('');
  console.log('Example call:');
  console.log('  $ custom-help --help');
});

// required
program.parse(process.argv);
