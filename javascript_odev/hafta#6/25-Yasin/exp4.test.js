const result = require('./exp4.js');

test('objemizde first name ve lastname icermeli', () => {
    expect(result[0]).toHaveProperty('fullName');
})