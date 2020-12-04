export default (obj, r = '  ', s = 2) => {
  const iter = (node, depth) => {
    const repeat = r.repeat((s * depth) - 1);
    if (!Array.isArray(node)) {
      node = Object.entries(node);
    }
    return node.map((a) => {
      const key = a;
      if (key.status === 'hasChildren') {
        return `\n${repeat}  ${key.name}: {${iter(key.children, depth + 1)}\n${repeat}  }`;
      } if (key.status === 'add') {
        if (typeof key.value === 'object') {
          return `\n${repeat}+ ${key.name}: {${iter(key.value, depth + 1)}\n${repeat}  }`;
        }
        return `\n${repeat}+ ${key.name}: ${key.value}`;
      } if (key.status === 'was') {
        if (typeof key.value === 'object') {
          return `\n${repeat}+ ${key.name}: {${iter(key.value, depth + 1)}\n${repeat}  }`;
        }
        return `\n${repeat}  ${key.name}: ${key.value}`;
      } if (key.status === 'deleted') {
        if (typeof key.value === 'object') {
          return `\n${repeat}- ${key.name}: {${iter(key.value, depth + 1)}\n${repeat}  }`;
        }
        return `\n${repeat}- ${key.name}: ${key.value}`;
      } if (key.status === 'change') {
        if (typeof key.oldValue === 'object') {
          return `\n${repeat}- ${key.name}: {${iter(key.oldValue, depth + 1)}\n${repeat}  }\n${repeat}+ ${key.name}: ${key.newValue}`;
        }
        return `\n${repeat}- ${key.name}: ${key.oldValue}\n${repeat}+ ${key.name}: ${key.newValue}`;
      }
      if (typeof key[1] === 'object') {
        return `\n${repeat}  ${key[0]}: {${iter(key[1], depth + 1)}\n${repeat}  }`;
      }
      return `\n${repeat}  ${key[0]}: ${key[1]}`;
    });
  };
  return `{${iter(obj, 1).join().replace(/,/g, '')}\n}`;
};
