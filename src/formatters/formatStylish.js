import _ from 'lodash';

const stringify = (iter, value, depth, repeat) => {
  if (_.isObject(value)) {
    if (!Array.isArray(value)) {
      const some = Object.entries(value);
      return ` {${iter(some, depth + 1)}\n${repeat}  }`;
    }
    return ` {${iter(value, depth + 1)}\n${repeat}  }`;
  }

  if (value === '') {
    return `${value}`;
  }
  return ` ${value}`;
};

export default (obj, strRepit = '  ', spase = 2) => {
  const iter = (node, depth) => {
    const repeat = strRepit.repeat((spase * depth) - 1);
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
          return `\n${repeat}  ${key[0]}:${stringify(iter, key[1], depth, repeat)}`; // иначе пропадают значения у последних групп.
      }
    });
  };
  return `{${iter(obj, 1).join().replace(/,/g, '')}\n}`;
};
