import { test, expect } from '@jest/globals';
import genDiff from '../src/genDiff.js';


test('srtring or not string?', () => {
  expect(genDiff('../__fixtures__/first.json', '../__fixtures__/second.json'))
  .toBe('../__fixtures__/expectedFlat.js');
});

console.log(genDiff('../__fixtures__/first.json', '../__fixtures__/second.json'))