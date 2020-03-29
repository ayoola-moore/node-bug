const ora = require('ora');
const Papa = require('papaparse');

const spinner = ora('processing..');

const parseCsv = (csv: string) => {
  Papa.parse(csv, {
    download: true,
  });
  // handle errors
};

const summarizeCsv = (json: string) => {
  //logic
  // handle errors
};

const convertToCsv = (csv: string) => {
  // logic
  // handle errors
};

export function makeSummary(csv: string): any {
  // spinner.start();
  // const jsonOutput = parseCsv(csv);
  // const summary = summarizeCsv(jsonOutput);
  // convertToCsv(summary);
  // spinner.stop();
  // console.log('successful...');
  console.log('csv', csv);
}
