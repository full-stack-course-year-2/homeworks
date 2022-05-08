const { test, expect } = require('@jest/globals');
const sonuc = require('./exp4.js');

test('objemizde firstName ve lastName olmali ', () => {
    expect(sonuc[0]).toHaveProperty('firstName' && 'lastName');
});