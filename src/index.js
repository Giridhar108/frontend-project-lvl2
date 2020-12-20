import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildTree from './buildTree.js';
import formaterChoise from './format.js';

const getFormat = (file) => path.extname(file).replace(/\./, '');

export default (pathOne, pathTwo, format = 'stylish') => {
  const formatFileOne = getFormat(pathOne);
  const formatFileTwo = getFormat(pathTwo);
  const data1 = parse(fs.readFileSync(path.resolve(`${pathOne}`)), formatFileOne);
  const data2 = parse(fs.readFileSync(path.resolve(`${pathTwo}`)), formatFileTwo);
  const innerPresentation = buildTree(data1, data2);
  return formaterChoise(format, innerPresentation);
};
