const { deepEqual } = require('./deepEqual');

test('примитивы', () => {
  expect(deepEqual(1, 1)).toBe(true);
  expect(deepEqual('a', 'b')).toBe(false);
  expect(deepEqual(null, null)).toBe(true);
  expect(deepEqual(NaN, NaN)).toBe(true);
});

test('массивы', () => {
  expect(deepEqual([123, 456], [123, 456])).toBe(true);
  expect(deepEqual([123, 456], [123, 457])).toBe(false);
});

test('объекты', () => {
  expect(deepEqual({ test: 123 }, { test: 123 })).toBe(true);
  expect(deepEqual({ test: 123 }, { test: 124 })).toBe(false);
  expect(deepEqual({ superTest: { test: 123 } }, { superTest: { test: 123 } })).toBe(true);
});

test('date', () => {
  expect(deepEqual(new Date('1234-11-11'), new Date('1234-11-11'))).toBe(true);
  expect(deepEqual(new Date('1234-11-11'), new Date('1234-11-12'))).toBe(false);
});

test('map&set', () => {
  expect(deepEqual(new Map([['test', 1]]), new Map([['test', 1]]))).toBe(true);
  expect(deepEqual(new Map([['test', 1]]), new Map([['test', 2]]))).toBe(false);
  expect(deepEqual(new Set([1, 2, 3]), new Set([1, 2, 3]))).toBe(true);
  expect(deepEqual(new Set([1, 2, 3]), new Set([1, 2, 4]))).toBe(false);
});
