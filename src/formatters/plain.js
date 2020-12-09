const stringify = (value) => {
  if (typeof (value) === 'object' && value !== null) {
    return '[complex value]';
  }
  if (typeof (value) === 'string') {
    return `'${value}'`;
  }
  return `${value}`;
};

export default (obj) => {
  const iter = (node, arr) => {
    const result = node.map((key) => {
      const newArr = [arr, key.name].flat();

      if (key.status === 'hasChildren') {
        return iter(key.children, newArr.join('.'));
      } if (key.status === 'add') {
        return `Property '${newArr.join('.')}' was added with value: ${stringify(key.value)}`;
      } if (key.status === 'deleted') {
        return `Property '${newArr.join('.')}' was removed`;
      } if (key.status === 'change') {
        return `Property '${newArr.join('.')}' was updated. From ${stringify(key.oldValue)} to ${stringify(key.newValue)}`;
      } if (key.status === 'was') {
        return null;
      }
      return key;
    });

    return result.filter((string) => string !== null).join('\n');
  };

  return iter(obj, []);
};
