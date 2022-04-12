const sum = require('./sum');

test('sayı1: 1 + 2 sayı2 tolamı 3 olmalı', () => {
  expect(sum(1, 2)).toBe(3);
});