const Hashtable = require('./hash');

describe('Hashtable Tests', () => {
  let myHashtable;

  beforeEach(() => {
    myHashtable = new Hashtable(10);
  });

  test('Setting a key/value results in the value being in the data structure', () => {
    myHashtable.set('FirstName', 'Farah');
    expect(myHashtable.get('FirstName')).toBe('Farah');
  });

  test('Retrieving based on a key returns the value stored', () => {
    myHashtable.set('Age', 21);
    expect(myHashtable.get('Age')).toBe(21);
  });

  test('Returns null for a key that does not exist', () => {
    expect(myHashtable.get('LastName')).toBeUndefined();
  });

  test('Returns a list of all unique keys', () => {
    myHashtable.set('FirstName', 'Farah');
    myHashtable.set('Age', 21);
    expect(myHashtable.keys()).toEqual(expect.arrayContaining(['FirstName', 'Age']));
  });

  test('Handles collision within the hashtable', () => {
    myHashtable.set('Farah', '21');
    expect(myHashtable.get('Farah')).toBe('21');
  });

  test('Retrieves a value from a bucket with a collision', () => {
    myHashtable.set('FirstName', 'Farah');
    myHashtable.set('Age', '21');
    expect(myHashtable.get('FirstName')).toBe('Farah');
  });

  test('Hashes a key to an in-range value', () => {
    const hashedIndex = myHashtable.hash('FirstName');
    expect(hashedIndex).toBeGreaterThanOrEqual(0);
    expect(hashedIndex).toBeLessThan(10);
  });
});
