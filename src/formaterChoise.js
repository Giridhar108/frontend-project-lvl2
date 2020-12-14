import treeBuilder from './treeBuilder.js';
import stylish from './formatters/stylish.js';
import plain from './formatters/plain.js';
import json from './formatters/json.js';

export default (format, one, two) => {
  switch (format) {
    case 'json':
      return json(treeBuilder(one, two));
    case 'plain':
      return plain(treeBuilder(one, two));
    case 'stylish':
      return stylish(treeBuilder(one, two));
    default:
  }
  return 'линтер ругается что нет return, его и не должно быть, так как он в ифах или в свичах. То ли я дурак, толи лыжи не едут';
};
