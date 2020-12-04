import * as fs from 'fs';
import * as path from 'path';
import { jsonParse, yamlParse } from './parsers.js';
import whatIsFormat from './whatIsFormat.js';

export default (pathOne, pathTwo) => {
  const format = whatIsFormat(pathOne);
  if (format === '.json') {
    const one = jsonParse(fs.readFileSync(path.resolve(`${pathOne}`)));
    const two = jsonParse(fs.readFileSync(path.resolve(`${pathTwo}`)));
    return { one, two };
  } if (format === '.yaml') {
    const one = yamlParse(fs.readFileSync(path.resolve(`${pathOne}`)));
    const two = yamlParse(fs.readFileSync(path.resolve(`${pathTwo}`)));
    return { one, two };
  }
  throw new Error('Описался');
};
