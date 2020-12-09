import yaml from 'js-yaml';
// А для чего оборачивать эти функции в функции? чтобы экспортировать их
export const jsonParse = (json) => JSON.parse(json);

export const yamlParse = (yam) => yaml.safeLoad(yam);
