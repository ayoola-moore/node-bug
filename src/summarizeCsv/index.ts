import { makeSummary } from './makeSummary';
const summarize = require('commander');

//commands
summarize
  .command('summarize')
  .description('summarize the data in csv')
  .usage('command [options] <file-path>')
  .requiredOption('-i, --input <file>', 'csv file path', repleceFunction)
  .option('-o, --output [output]', 'csv output file name', repleceFunction)
  .on('--help', () => {
    console.log('');
    console.log('Example call:');
    console.log('  $ custom-help --help');
  })
  .action(makeSummary('summary'));
