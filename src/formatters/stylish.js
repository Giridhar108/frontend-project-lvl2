export default (obj, r = '  ', s = 2) => {
  const iter = (node, depth) => {
    const repeat = r.repeat((s * depth) - 1);
    return node.map((key) => {
      const stringify = (value) => {
        if (typeof (value) === 'object' && value !== null) {
          if (!Array.isArray(value)) {
            const some = Object.entries(value);
            return `{ ${iter(some, depth + 1)}\n${repeat}  }`;
          }
          return `{ ${iter(value, depth + 1)}\n${repeat}  }`;
        }
        return `${value}`;
      };
      if (key.status === 'hasChildren') {
        return `\n${repeat}  ${key.name}: ${stringify(key.children)}`;
      } if (key.status === 'add') {
        return `\n${repeat}+ ${key.name}: ${stringify(key.value)}`;
      } if (key.status === 'was') {
        return `\n${repeat}  ${key.name}: ${stringify(key.value)}`;
      } if (key.status === 'deleted') {
        return `\n${repeat}- ${key.name}: ${stringify(key.value)}`;
      } if (key.status === 'change') {
        return `\n${repeat}- ${key.name}: ${stringify(key.oldValue)}\n${repeat}+ ${key.name}: ${stringify(key.newValue)}`;
      }
      return `\n${repeat}  ${key[0]}: ${stringify(key[1])}`;
    });
  };
  return `{${iter(obj, 1).join().replace(/,/g, '')}\n}`;
};
