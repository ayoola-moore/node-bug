"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ora_1 = __importDefault(require("ora"));
function makeSummary(csv) {
    const spinner = ora_1.default().start();
    setTimeout(() => { }, 3000);
    spinner.stop();
    console.log('csv', csv);
}
exports.makeSummary = makeSummary;
// module.exports = {
//   makeSummary: (csv: string) => {
//     const spinner = ora().start();
//     setTimeout(() => {}, 3000);
//     spinner.stop();
//     console.log('csv', csv);
//   },
// };
//# sourceMappingURL=makeSummary.js.map