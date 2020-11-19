import { test, expect } from '@jest/globals';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../src/genDiff.js';
import stringify from '../src/stringify.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const right = JSON.parse(fs.readFileSync(getFixturePath('expectedFlat.json')));

console.log(right);

test('srtring or not string?', () => {
  expect(genDiff(getFixturePath('first.json'), getFixturePath('second.json')))
    .toBe(stringify(right));
});
