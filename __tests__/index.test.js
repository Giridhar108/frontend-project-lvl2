import { test, expect } from '@jest/globals'; // иначе ругается линтер
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

// const right = fs.readFileSync(getFixturePath('expectedFlat.txt'), 'utf-8');

// test('test JSON', () => {
//   expect(genDiff(getFixturePath('first.json'), getFixturePath('second.json')))
//     .toBe(right);
// });

// test('test YAML', () => {
//   expect(genDiff(getFixturePath('first.yaml'), getFixturePath('second.yaml')))
//     .toBe(right);
// });

const getData = (file) => fs.readFileSync(getFixturePath(file), 'utf-8');

test('test JSON big', () => {
  expect(genDiff(getFixturePath('firstBig.json'), getFixturePath('secondBig.json')))
    .toBe(getData('expectedFlatBig.txt'));
});

test('test JSON big plain', () => {
  expect(genDiff(getFixturePath('firstBig.json'), getFixturePath('secondBig.json'), 'plain'))
    .toBe(getData('expectedPlain.txt'));
});

test('test JSON big json', () => {
  expect(genDiff(getFixturePath('firstBig.json'), getFixturePath('secondBig.json'), 'json'))
    .toBe(getData('expectedJSON.txt'));
});

test('test YAML big', () => {
  expect(genDiff(getFixturePath('firstBig.yaml'), getFixturePath('secondBig.yaml')))
    .toBe(getData('expectedFlatBig.txt'));
});

test('test YAML big plain', () => {
  expect(genDiff(getFixturePath('firstBig.yaml'), getFixturePath('secondBig.yaml'), 'plain'))
    .toBe(getData('expectedPlain.txt'));
});

test('test YAML big json', () => {
  expect(genDiff(getFixturePath('firstBig.yaml'), getFixturePath('secondBig.yaml'), 'json'))
    .toBe(getData('expectedJSON.txt'));
});
