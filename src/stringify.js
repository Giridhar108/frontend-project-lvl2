export default (v, r = '  ', s = 1) => {
  const result = Object.entries(v)
  const key  = Object.keys(v)
  const repit = r.repeat(s)
  return result.reduce((acc, a) => {
     if (a[0][0] !== '-' && a[0][0] !== '+'){
      acc += `${repit}  ${a}\n`
     } else {
      acc += `${repit}${a}\n`
     }
    return acc
  }, '{\n').replace(/,/g, ': ') + '}'
}

