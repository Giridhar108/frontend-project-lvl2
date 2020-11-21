import { test, expect } from '@jest/globals';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {genDiff} from '../src/genDiff.js';
import stylish from '../src/stylish.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const right = JSON.parse(fs.readFileSync(getFixturePath('expectedFlat.json')));

test('test JSON', () => {
  expect(genDiff(getFixturePath('first.json'), getFixturePath('second.json')))
    .toStrictEqual(right);
});

test('test YAML', () => {
  expect(genDiff(getFixturePath('first.yaml'), getFixturePath('second.yaml')))
    .toStrictEqual(right);
});

const rightBig = JSON.parse(fs.readFileSync(getFixturePath('expectedFlatBig.json')));
console.log(rightBig)

test('test JSON', () => {
  expect(genDiff(getFixturePath('first.json'), getFixturePath('second.json')))
    .toStrictEqual(right);
});

test('test YAML', () => {
  expect(genDiff(getFixturePath('first.yaml'), getFixturePath('second.yaml')))
    .toStrictEqual(right);
});
