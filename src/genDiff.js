import getObjects from './getObjects.js';

export default (pathOne, pathTwo) => {
  const { first, second } = getObjects(pathOne, pathTwo);

  const iter = (one, two) => {
    const keys = Object.entries({ ...one, ...two }).sort();

    return keys.reduce((acc, c) => {
      if (typeof (one[`${c[0]}`]) === 'object'
     && typeof (two[`${c[0]}`]) === 'object') {
        acc[`${c[0]}`] = iter(one[`${c[0]}`], two[`${c[0]}`]);
      } else if (one[`${c[0]}`] === two[`${c[0]}`]) {
        acc[`  ${c[0]}`] = one[`${c[0]}`];
      } else if (
        one[`${c[0]}`] !== two[`${c[0]}`]
      && one[`${c[0]}`] !== undefined
      && two[`${c[0]}`] !== undefined
      ) {
        acc[`- ${c[0]}`] = one[`${c[0]}`];
        acc[`+ ${c[0]}`] = two[`${c[0]}`];
      } else if (one[`${c[0]}`] === undefined) {
        acc[`+ ${c[0]}`] = two[`${c[0]}`];
      } else if (two[`${c[0]}`] === undefined) {
        acc[`- ${c[0]}`] = one[`${c[0]}`];
      }
      return acc;
    }, {});
  };

  return iter(first, second);
};

/*
c:/hexlet-git/frontend-project-lvl2/path/first.json
c:/hexlet-git/frontend-project-lvl2/path/second.json
 */
/*
 ../frontend-project-lvl2/path/first.json
 ../frontend-project-lvl2/path/second.json
 */
