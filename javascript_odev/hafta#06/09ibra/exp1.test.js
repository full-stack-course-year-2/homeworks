const { test, expect } = require('@jest/globals');
const sonuc = require('./exp1');

test('Madison Marshall`in kullanici kimligi = b4a306cb-8b95-4f85-b9f8-434dbe010985 olmali', () => {
    expect(sonuc.id).toBe('b4a306cb-8b95-4f85-b9f8-434dbe010985');
});