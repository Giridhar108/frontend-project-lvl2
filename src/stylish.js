export default (obj) => JSON.stringify(obj, null, 4)
.replace(/"/g, '').replace(/,/g, '')


/* (v, r = '  ', s = 1) => {
  const repit = r.repeat(s);
  const result = Object.entries(v).reduce((acc, a) => {
    if (a[0][0] !== '-' && a[0][0] !== '+') {
      acc += `${repit}  ${a}\n`;
    } else {
      acc += `${repit}${a}\n`;
    }
    return acc;
  }, '{\n');

  return `${result.replace(/,/g, ': ')}}`;
};
 */