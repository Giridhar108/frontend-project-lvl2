#!/usr/bin/env node
import { program } from 'commander';
import gendiff from './src/genDiff.js';

export default () => {
  program
    .version('0.0.1')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'output format', 'stylish')
  // .option('-h, --help', 'output usage information')
    .arguments('<filepath1> <filepath2>')
    .action((pathOne, pathTwo) => {
      const { format } = program;
      const diff = gendiff(pathOne, pathTwo, format);
      console.log(diff);
    });
  program.parse(process.argv);
};
