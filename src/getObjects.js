import * as fs from 'fs';
import * as path from 'path';
import { jsonParse, yamlParse } from './parsers.js';
import whatIsFormat from './whatIsFormat.js';

export default (pathOne, pathTwo) => {
  const format = whatIsFormat(pathOne);
  if (format === '.json') {
    const first = jsonParse(fs.readFileSync(path.resolve(`${pathOne}`)));
    const second = jsonParse(fs.readFileSync(path.resolve(`${pathTwo}`)));
    return { first, second };
  } if (format === '.yaml') {
    const first = yamlParse(fs.readFileSync(path.resolve(`${pathOne}`)));
    const second = yamlParse(fs.readFileSync(path.resolve(`${pathTwo}`)));
    return { first, second };
  }
  throw new Error('Описался');
};
