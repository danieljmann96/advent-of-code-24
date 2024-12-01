import { readInput } from './utils';

const input = readInput('day1.txt');
const lines = input.split('\n');
const lefts: number[] = [];
const rights: number[] = [];
lines.forEach(line => {
  const splitString = line.split(/(\s+)/);
  const left = Number(splitString.at(0));
  const right = Number(splitString.at(2));
  lefts.push(left);
  rights.push(right);
});
const sortedLefts = lefts.toSorted((a, b) => a - b);
const sortedRights = rights.toSorted((a, b) => a - b);
let totalDifference = 0;
sortedLefts.forEach((left, index) => {
  const right = sortedRights[index];
  const difference = Math.abs(left - right);
  totalDifference += difference;
});
console.log(`Part 1: ${totalDifference}`);
