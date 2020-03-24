"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const program = require('commander');
const ora = require('ora');
module.exports = () => __awaiter(void 0, void 0, void 0, function* () {
    const spinner = ora().start();
    try {
        spinner.stop();
        console.log(`Current conditions :`);
    }
    catch (err) {
        spinner.stop();
        console.error(err);
    }
});
//commands
program
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
    .action((file, options) => {
    console.log('file name: ', file);
    // more hanlder: require('../lib/moreHandler')(options);
});
//# sourceMappingURL=index.js.map