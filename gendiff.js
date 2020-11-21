#!/usr/bin/env node
import { program } from 'commander';
import genDiff from './src/genDiff.js';
import stylish from './src/stylish.js';

// import genDiff from '../frontend-project-lvl2/src/genDiff.js';
// import genDiff from '/hexlet-git/frontend-project-lvl2/src/genDiff.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format', 'stylish')
  // .option('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .action((pathOne, pathTwo) => {
    const result = genDiff(pathOne, pathTwo);
    if (program.format === 'stylish') {
      console.log(stylish(result));
    }
    // console.log('path one:', pathOne);
    // console.log('path two:', pathTwo);
  });
program.parse(process.argv);

if (program.format) console.log(`type: ${program.format}`);
