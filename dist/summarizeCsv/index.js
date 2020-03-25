"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const makeSummary_1 = require("./makeSummary");
const replaceFunction = () => console.log('nothing');
console.log('dknsk');
//commands
commander_1.default
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
    .action(makeSummary_1.makeSummary('summary'));
commander_1.default.command('');
//# sourceMappingURL=index.js.map