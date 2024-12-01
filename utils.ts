import { readFileSync } from 'fs';

export function readInput(filename: string) {
  return readFileSync(`./inputs/${filename}`, 'utf-8');
}
