import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildTree from './buildTree.js';
import formaterChoise from './format.js';

const getFormat = (file) => path.extname(file).replace(/\./, '');

export default (data1, data2, format = 'stylish') => {
  const formatFileOne = getFormat(data1);
  const formatFileTwo = getFormat(data2);
  const one = parse(fs.readFileSync(path.resolve(`${data1}`)), formatFileOne);
  const two = parse(fs.readFileSync(path.resolve(`${data2}`)), formatFileTwo);
  const innerPresentation = buildTree(one, two);
  return formaterChoise(format, innerPresentation);
};
