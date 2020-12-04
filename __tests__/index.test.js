import { test, expect } from '@jest/globals';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const right = fs.readFileSync(getFixturePath('expectedFlat.txt'), 'utf-8');

test('test JSON', () => {
  expect(genDiff(getFixturePath('first.json'), getFixturePath('second.json')))
    .toBe(right);
});

test('test YAML', () => {
  expect(genDiff(getFixturePath('first.yaml'), getFixturePath('second.yaml')))
    .toBe(right);
});

const rightBig = fs.readFileSync(getFixturePath('expectedFlatBig.txt'), 'utf-8');

test('test JSON big', () => {
  expect(genDiff(getFixturePath('firstBig.json'), getFixturePath('secondBig.json')))
    .toBe(rightBig);
});

test('test YAML big', () => {
  expect(genDiff(getFixturePath('firstBig.yaml'), getFixturePath('secondBig.yaml')))
    .toBe(rightBig);
});

const rightPlain = fs.readFileSync(getFixturePath('expectedPlain.txt'), 'utf-8');

test('test YAML big plain', () => {
  expect(genDiff(getFixturePath('firstBig.yaml'), getFixturePath('secondBig.yaml'), 'plain'))
    .toBe(rightPlain);
});

const rightJson = fs.readFileSync(getFixturePath('expectedJSON.txt'), 'utf-8');

test('test YAML big json', () => {
  expect(genDiff(getFixturePath('firstBig.yaml'), getFixturePath('secondBig.yaml'), 'json'))
    .toBe(rightJson);
});