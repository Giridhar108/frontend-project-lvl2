import * as fs from 'fs';
import * as path from 'path';
import treeBuilder from './treeBuilder.js';
import getObjects from './getObjects.js';
import stylish from './formatters/stylish.js';
import plain from './formatters/plain.js';
import json from './formatters/json.js';
import whatIsFormat from './whatIsFormat.js';

export default (pathOne, pathTwo, format) => {
  const formatFileOne = whatIsFormat(pathOne);
  const formatFileTwo = whatIsFormat(pathTwo);
  const one = getObjects(fs.readFileSync(path.resolve(`${pathOne}`)), formatFileOne);
  const two = getObjects(fs.readFileSync(path.resolve(`${pathTwo}`)), formatFileTwo);
  if (format === 'json') {
    return json(treeBuilder(one, two));
  } if (format === 'plain') {
    return plain(treeBuilder(one, two));
  }
  return stylish(treeBuilder(one, two));
};
