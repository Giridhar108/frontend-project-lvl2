export default (iter, value, depth, repeat) => {
  if (typeof (value) === 'object' && value !== null) {
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
