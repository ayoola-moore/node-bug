const ora = require('ora');

const spinner = ora().start();

export function makeSummary(csv: string) {
  setTimeout(() => {}, 3000);
  console.log('csv', csv);
}

spinner.stop();

// exports.makeSummary;
