import stringify from './stringify.js';

export default (obj, r = '  ', s = 2) => {
  const iter = (node, depth) => {
    const repeat = r.repeat((s * depth) - 1);
    return node.map((key) => {
      switch (key.status) {
        case 'hasChildren':
          return `\n${repeat}  ${key.name}:${stringify(iter, key.children, depth, repeat)}`;
        case 'add':
          return `\n${repeat}+ ${key.name}:${stringify(iter, key.value, depth, repeat)}`;
        case 'was':
          return `\n${repeat}  ${key.name}:${stringify(iter, key.value, depth, repeat)}`;
        case 'deleted':
          return `\n${repeat}- ${key.name}:${stringify(iter, key.value, depth, repeat)}`;
        case 'change':
          return `\n${repeat}- ${key.name}:${stringify(iter, key.oldValue, depth, repeat)}\n${repeat}+ ${key.name}:${stringify(iter, key.newValue, depth, repeat)}`;
        default:
          return `\n${repeat}  ${key[0]}:${stringify(iter, key[1], depth, repeat)}`; // иначе пропадают значения у последних групп.
      }
    });
  };
  return `{${iter(obj, 1).join().replace(/,/g, '')}\n}`;
};
