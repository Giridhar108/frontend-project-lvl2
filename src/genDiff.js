import getObjects from './getObjects.js';

export const genDiff = (pathOne, pathTwo) => {
  const { first, second } = getObjects(pathOne, pathTwo);

  const iter = (first, second) => {

  const keys = Object.entries({ ...first, ...second }).sort();

  return keys.reduce((acc, c) => {
    if(typeof (first[`${c[0]}`]) === 'object' &&
     typeof (second[`${c[0]}`]) === 'object'){
      acc[`${c[0]}`] = iter(first[`${c[0]}`], second[`${c[0]}`])
    } 
    else if (first[`${c[0]}`] === second[`${c[0]}`]) {
      acc[`  ${c[0]}`] = first[`${c[0]}`];
    }  else if (
      first[`${c[0]}`] !== second[`${c[0]}`]
      && first[`${c[0]}`] !== undefined
      && second[`${c[0]}`] !== undefined
    ) {
      acc[`- ${c[0]}`] = first[`${c[0]}`];
      acc[`+ ${c[0]}`] = second[`${c[0]}`];
    } else if (first[`${c[0]}`] === undefined) {
      acc[`+ ${c[0]}`] = second[`${c[0]}`];
    } else if (second[`${c[0]}`] === undefined) {
      acc[`- ${c[0]}`] = first[`${c[0]}`];
    } 
    return acc;
  }, {});
}
return iter(first, second)
};

/*
c:/hexlet-git/frontend-project-lvl2/path/first.json
c:/hexlet-git/frontend-project-lvl2/path/second.json
 */
/*
 ../frontend-project-lvl2/path/first.json
 ../frontend-project-lvl2/path/second.json
 */
