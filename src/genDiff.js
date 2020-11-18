import * as fs from "fs";
import * as path from "path";
export default (pathOne, pathTwo) => {
  const first = JSON.parse(fs.readFileSync(path.resolve(`${pathOne}`)));
  const second = JSON.parse(fs.readFileSync(path.resolve(`${pathTwo}`)));

  const keys = Object.entries({ ...first, ...second }).sort();

  return JSON.stringify(keys.reduce((acc, c) => {
    if (first[`${c[0]}`] === second[`${c[0]}`]) {
      acc[`${c[0]}`] = c[1];
    } else if (
      first[`${c[0]}`] !== second[`${c[0]}`] &&
      first[`${c[0]}`] !== undefined &&
      second[`${c[0]}`] !== undefined
    ) {
      acc[`- ${c[0]}`] = first[`${c[0]}`];
      acc[`+ ${c[0]}`] = second[`${c[0]}`];
    } else if (first[`${c[0]}`] === undefined) {
      acc[`+ ${c[0]}`] = second[`${c[0]}`];
    } else if (second[`${c[0]}`] === undefined) {
      acc[`- ${c[0]}`] = first[`${c[0]}`];
    }

    return acc;
  }, {}));
};

/* 
c:/hexlet-git/frontend-project-lvl2/path/first.json
c:/hexlet-git/frontend-project-lvl2/path/second.json
 */
/* 
 ../frontend-project-lvl2/path/first.json
 ../frontend-project-lvl2/path/second.json
 */
