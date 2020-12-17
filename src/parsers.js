import yaml from 'js-yaml';

export default (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return yaml.safeLoad(data);
    default:
      return new Error('format not found');
  }
};
