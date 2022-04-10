const result = require('./exp4');

test('objemiz fisrtName icermeli', () => {
    expect(result[0]).toHaveProperty("firstName" && "lastName");
});