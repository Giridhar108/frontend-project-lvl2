import _ from 'lodash';

const treeBulder = (first, second) => {
  const keys = _.union(_.keys(first), _.keys(second)).sort();
  return keys.map((key) => {
    const firstValue = first[key];
    const secondValue = second[key];
    const has = _.has(first, key) && _.has(second, key);
    if (has && typeof (firstValue) === 'object' && typeof (secondValue) === 'object') {
      return { name: key, status: 'hasChildren', children: treeBulder(firstValue, secondValue) };
    }
    if (has && firstValue === secondValue) {
      return { name: key, status: 'was', value: firstValue };
    }
    if (has && firstValue !== secondValue) {
      return {
        name: key, status: 'change', oldValue: firstValue, newValue: secondValue,
      };
    }
    if (!_.has(first, key) && _.has(second, key)) {
      return { name: key, status: 'add', value: secondValue };
    }
    return { name: key, status: 'deleted', value: firstValue };
  });
};

export default treeBulder;
