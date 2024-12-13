import { readInput } from './utils';

const input = readInput('day3.txt');
{
  const regexToMatch = /mul\((\d+),(\d+)\)/g;
  const matches = input.match(regexToMatch);
  let result = 0;
  matches?.forEach(match => {
    result += performSum(match);
  });
  console.log(`Part 1: ${result}`);
}

{
  const regexToMatch = /(mul\((\d+),(\d+)\))|(do\(\))|(don't\(\))/g;
  const matches = input.match(regexToMatch);
  let result = 0;
  let isDo = true;
  matches?.forEach(match => {
    if (match === 'do()') {
      isDo = true;
    } else if (match === "don't()") {
      isDo = false;
    } else if (isDo) {
      result += performSum(match);
    }
  });
  console.log(`Part 2: ${result}`);
}

function performSum(input: string) {
  const first = Number(input.split(',')[0].slice(4));
  const second = Number(input.split(',')[1].slice(0, -1));
  return first * second;
}
