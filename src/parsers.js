// const yaml = require('js-yaml');
import yaml from 'js-yaml';

export const jsonParse = (json) => JSON.parse(json);

export const yamlParse = (yam) => yaml.safeLoad(yam);
