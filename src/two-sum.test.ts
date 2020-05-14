import { twoSum } from './two-sum';

describe('1. Two Sum', () => {
  test('#1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('#2', () => {
    expect(twoSum([2, 7, 11, 15], 22)).toEqual([1, 3]);
  });
})