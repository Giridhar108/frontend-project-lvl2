import yaml from 'js-yaml';

export default (file, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(file);
    case '.yaml':
      return yaml.safeLoad(file);
    default:
  }
  return 'линтер ругается что нет return, его и не должно быть, так как он в ифах или в свичах. То ли я дурак, толи лыжи не едут';
};
