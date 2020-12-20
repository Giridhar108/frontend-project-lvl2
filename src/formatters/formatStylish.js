import _ from 'lodash';

const stringify = (iter, value, depth, repeat) => {
  if (_.isObject(value)) {
    if (!Array.isArray(value)) {
      const entries = Object.entries(value);
      const result = entries.map((a) => ({ name: a[0], status: 'unchanged', value: a[1] }));
      return ` {${iter(result, depth + 1)}\n${repeat}  }`;
    }
    return ` {${iter(value, depth + 1)}\n${repeat}  }`;
  }

  if (value === '') {
    return `${value}`;
  }
  return ` ${value}`;
};

export default (obj, indent = '  ', space = 2) => {
  const iter = (node, depth) => {
    const repeat = indent.repeat((space * depth) - 1);
    return node.map((key) => {
      switch (key.status) {
        case 'hasChildren':
          return `\n${repeat}  ${key.name}:${stringify(iter, key.children, depth, repeat)}`;
        case 'added':
          return `\n${repeat}+ ${key.name}:${stringify(iter, key.value, depth, repeat)}`;
        case 'unchanged':
          return `\n${repeat}  ${key.name}:${stringify(iter, key.value, depth, repeat)}`;
        case 'deleted':
          return `\n${repeat}- ${key.name}:${stringify(iter, key.value, depth, repeat)}`;
        case 'changed':
          return `\n${repeat}- ${key.name}:${stringify(iter, key.oldValue, depth, repeat)}\n${repeat}+ ${key.name}:${stringify(iter, key.newValue, depth, repeat)}`;
        default:
          return new Error();
      }
    });
  };
  return `{${iter(obj, 1).join().replace(/,/g, '')}\n}`;
};
