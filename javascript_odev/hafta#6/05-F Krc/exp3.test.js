const result = require('./exp3');

test("'OK great thanks' yorumunu 7f053852-7440-4e44-838c-ddac24611050 kullanıcı yaptı" , () => {
    expect(result.id).toBe('7f053852-7440-4e44-838c-ddac24611050');
});