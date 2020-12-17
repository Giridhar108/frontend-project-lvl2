import _ from 'lodash';

const treeBulder = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2)).sort();
  return keys.map((key) => {
    const firstValue = data1[key];
    const secondValue = data2[key];
    const has = _.has(data1, key) && _.has(data2, key);
    if (has && _.isObject(firstValue) && _.isObject(secondValue)) {
      return { name: key, status: 'hasChildren', children: treeBulder(firstValue, secondValue) };
    }
    if (has && firstValue === secondValue) {
      return { name: key, status: 'unchanged', value: firstValue };
    }
    if (has && firstValue !== secondValue) {
      return {
        name: key, status: 'changed', oldValue: firstValue, newValue: secondValue,
      };
    }
    if (!_.has(data1, key) && _.has(data2, key)) {
      return { name: key, status: 'added', value: secondValue };
    }
    return { name: key, status: 'deleted', value: firstValue };
  });
};

export default treeBulder;
