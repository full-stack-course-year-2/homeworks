const sum = require('./sum');

test('sayi 1 + 2 sayi 2 toplami esittir 3 olmali', () => {
  expect(sum(1, 2)).toBe(3);
});