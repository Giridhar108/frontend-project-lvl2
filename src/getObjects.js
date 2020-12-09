import { jsonParse, yamlParse } from './parsers.js';

export default (file, format) => {
  if (format === '.json') {
    const result = jsonParse(file);
    return result;
  } if (format === '.yaml') {
    const result = yamlParse(file);
    return result;
  }
};
