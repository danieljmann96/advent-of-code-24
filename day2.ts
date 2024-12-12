import { readInput } from './utils';

const input = readInput('day2.txt');
const reports = input.split('\n').map(line => line.split(' ').map(Number));

{
  let numberOfSafeReports = 0;
  reports.forEach(report => {
    if (runReport(report)) {
      numberOfSafeReports++;
    }
  });
  console.log(`Part 1: ${numberOfSafeReports}`);
}

{
  let numberOfSafeReports = 0;
  reports.forEach(report => {
    if (runReport(report)) {
      numberOfSafeReports++;
    } else {
      const subReports = getSubReports(report);
      for (const subReport of subReports) {
        if (runReport(subReport)) {
          numberOfSafeReports++;
          break;
        }
      }
    }
  });
  console.log(`Part 2: ${numberOfSafeReports}`);
}

function runReport(report: number[]): boolean {
  let isSafe = false;
  const originalToString = report.join(',');
  const sortedToString = report.toSorted((a, b) => a - b).join(',');
  const reversedToString = report.toSorted((a, b) => b - a).join(',');
  if (
    originalToString === sortedToString ||
    originalToString === reversedToString
  ) {
    isSafe = true;
    for (let i = 0; i < report.length - 1; i++) {
      const current = report[i];
      const next = report[i + 1];
      const difference = Math.abs(current - next);
      if (difference === 0 || difference > 3) {
        isSafe = false;
        break;
      }
    }
  }
  return isSafe;
}

function getSubReports(report: number[]): number[][] {
  const subReports: number[][] = [];
  for (let i = 0; i < report.length; i++) {
    const subReport = report.toSpliced(i, 1);
    subReports.push(subReport);
  }
  return subReports;
}
