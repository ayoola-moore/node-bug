import ora from 'ora';

export function makeSummary(csv: string): any {
  const spinner = ora().start();
  setTimeout(() => {}, 3000);
  spinner.stop();
  console.log('csv', csv);
}

// module.exports = {
//   makeSummary: (csv: string) => {
//     const spinner = ora().start();
//     setTimeout(() => {}, 3000);
//     spinner.stop();
//     console.log('csv', csv);
//   },
// };
