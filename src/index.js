import * as fs from 'fs';
import * as path from 'path';
import parse from './parse.js';
import formaterChoise from './formaterChoise.js';

const getFormat = (file) => path.extname(file);

export default (pathOne, pathTwo, format = 'stylish') => {
  const formatFileOne = getFormat(pathOne);
  const formatFileTwo = getFormat(pathTwo);
  const one = parse(fs.readFileSync(path.resolve(`${pathOne}`)), formatFileOne);
  const two = parse(fs.readFileSync(path.resolve(`${pathTwo}`)), formatFileTwo);
  return formaterChoise(format, one, two);
};
