const { test, expect } = require('@jest/globals');
const sonuc = require('./exp3.js');

test('OK great thanks yorumu yapan user ile eslesmeli', () => {
    const user = {
        id: "7f053852-7440-4e44-838c-ddac24611050",
        firstName: "Jar",
        lastName: "Burke",
    };
    expect(sonuc).toMatchObject(user);
});