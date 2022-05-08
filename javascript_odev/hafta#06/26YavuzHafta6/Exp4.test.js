const { users } = require('./data.js.js');
const result = require('./Exp4.js');

test('Yorumlar dizisindeki her yoruma kullanıcının adı ve soyadı ekli mi?', () => {
    expect(result[0]).toHaveProperty('firstName' && 'lastName');
});




