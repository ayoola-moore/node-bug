import summarize from 'commander';
import { makeSummary } from './makeSummary';

const replaceFunction = () => console.log('nothing');

//commands
summarize
  .command('summarize')
  .description('summarize the data in csv')
  .usage('command [options] <file-path>')
  .requiredOption('-i, --input <file>', 'csv file path', replaceFunction)
  .option('-o, --output [output]', 'csv output file name', replaceFunction)
  .on('--help', () => {
    console.log('');
    console.log('Example call:');
    console.log('  $ custom-help --help');
  })
  .action(makeSummary('summary'));

summarize.command('');
