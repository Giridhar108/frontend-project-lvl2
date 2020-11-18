#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../frontend-project-lvl2/src/genDiff.js';
// import genDiff from '../frontend-project-lvl2/src/genDiff.js';
// import genDiff from '/hexlet-git/frontend-project-lvl2/src/genDiff.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  // .option('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .action(function (pathOne, pathTwo) {
    console.log(genDiff(pathOne, pathTwo));
    // console.log('path one:', pathOne);
    // console.log('path two:', pathTwo);
  })
program.parse(process.argv)

if (program.format) console.log(`type: ${program.format}`);

