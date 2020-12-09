import _ from 'lodash';

const treeBulder = (first, second) => {
  const keys = Object.entries({ ...first, ...second }).sort();
  const commonKeys = keys.map((a) => a[0]);
  return commonKeys.map((a) => {
    const firstValue = first[a];
    const secondValue = second[a];

    if (_.has(first, a) && _.has(second, a)) {
      if (typeof (firstValue) === 'object' && typeof (secondValue) === 'object') {
        return { name: a, status: 'hasChildren', children: treeBulder(firstValue, secondValue) };
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

export default treeBulder;
