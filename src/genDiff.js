import _ from 'lodash';
import getObjects from './getObjects.js';
import stylish from '../formatters/stylish.js';
import plain from '../formatters/plain.js';
import json from '../formatters/json.js';

export default (pathOne, pathTwo, format) => {
  const { one, two } = getObjects(pathOne, pathTwo);

  const genDiff = (first, second) => {
    const keys = Object.entries({ ...first, ...second }).sort();
    const commonKeys = keys.map((a) => a[0]);
    return commonKeys.map((a) => {
      const firstValue = first[a];
      const secondValue = second[a];

      if (_.has(first, a) && _.has(second, a)) {
        if (typeof (firstValue) === 'object' && typeof (secondValue) === 'object') {
          return { name: a, status: 'hasChildren', children: genDiff(firstValue, secondValue) };
        }
        if (firstValue === secondValue) {
          return { name: a, status: 'was', value: firstValue };
        }

        return {
          name: a, status: 'change', oldValue: firstValue, newValue: secondValue,
        };
      }

      if (!_.has(first, a) && _.has(second, a)) {
        return { name: a, status: 'add', value: secondValue };
      }

      return { name: a, status: 'deleted', value: firstValue };
    });
  };
  if (format === 'json') {
    return json(genDiff(one, two));
  } if (format === 'plain') {
    return plain(genDiff(one, two));
  }
  return stylish(genDiff(one, two));
};
