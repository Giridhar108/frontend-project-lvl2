import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return `${value}`;
};

export default (obj) => {
  const iter = (node, path) => {
    const result = node.map((key) => {
      const newPath = [path, key.name].flat();
      switch (key.status) {
        case 'hasChildren':
          return iter(key.children, newPath.join('.'));
        case 'added':
          return `Property '${newPath.join('.')}' was added with value: ${stringify(key.value)}`;
        case 'deleted':
          return `Property '${newPath.join('.')}' was removed`;
        case 'changed':
          return `Property '${newPath.join('.')}' was updated. From ${stringify(key.oldValue)} to ${stringify(key.newValue)}`;
        case 'unchanged':
          return null;
        default:
          return key; // для линтера, не для себя.
      }
    });
    return result.filter((string) => string !== null).join('\n');
  };

  return iter(obj, []);
};
