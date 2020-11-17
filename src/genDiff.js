import * as fs from'fs';
import * as path from'path';
export default (pathOne, pathTwo) => {
  // console.log(pathOne, pathTwo)
    const first = fs.readFileSync(path.resolve(`${pathOne}`));
    const second = fs.readFileSync(path.resolve(`${pathTwo}`));
    // console.log(data.toString())
    console.log(JSON.parse(first))
    console.log(JSON.parse(second))
    console.log(path.resolve(`${pathTwo}`))
}

/* 
c:/hexlet-git/frontend-project-lvl2/path/first.json
c:/hexlet-git/frontend-project-lvl2/path/second.json
 */
/* 
 ../frontend-project-lvl2/path/first.json
 ../frontend-project-lvl2/path/second.json
 */

