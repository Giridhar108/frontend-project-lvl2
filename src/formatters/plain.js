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
      switch (key.status) {
        case 'hasChildren':
          return iter(key.children, newArr.join('.'));
        case 'add':
          return `Property '${newArr.join('.')}' was added with value: ${stringify(key.value)}`;
        case 'deleted':
          return `Property '${newArr.join('.')}' was removed`;
        case 'change':
          return `Property '${newArr.join('.')}' was updated. From ${stringify(key.oldValue)} to ${stringify(key.newValue)}`;
        case 'was':
          return null;
        default:
          return key; // для линтера, не для себя.
      }
    });
    return result.filter((string) => string !== null).join('\n');
  };

  return iter(obj, []);
};
