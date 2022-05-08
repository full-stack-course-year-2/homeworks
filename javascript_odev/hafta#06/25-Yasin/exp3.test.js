const kullanici1 = require('./exp3.js')

test('OK great thanks yorumunu yapan user ile eslesmeli', () => {
    const user = {
        id: '7f053852-7440-4e44-838c-ddac24611050',
        firstName: 'Jar',
        lastName: 'Burke'
    };
    expect(kullanici1).toMatchObject(user);
} )