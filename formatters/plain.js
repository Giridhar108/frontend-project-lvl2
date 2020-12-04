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
    const result = node.map((a) => {
      const newArr = [arr, a.name].flat();

      if (a.status === 'hasChildren') {
        return iter(a.children, newArr.join('.'));
      } if (a.status === 'add') {
        return `Property '${newArr.join('.')}' was added with value: ${stringify(a.value)}`;
      } if (a.status === 'deleted') {
        return `Property '${newArr.join('.')}' was removed`;
      } if (a.status === 'change') {
        return `Property '${newArr.join('.')}' was updated. From ${stringify(a.oldValue)} to ${stringify(a.newValue)}`;
      } if (a.status === 'was') {
        return null;
      }
      return a;
    });

    return result.filter((string) => string !== null).join('\n');
  };

  return iter(obj, []);
};
