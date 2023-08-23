const { mergeSort } = require('./merge-sort');

describe('Merge Sort', () => {
  it('Return sorted array from input array', () => {
    expect(mergeSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
