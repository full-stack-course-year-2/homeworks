const result = require('./exp4');
const {users} = require('./data');

test("Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadı ekli olmalı", () => {
  
   expect(result.firstName).toBe(users.firstName);
   expect(result.lastName).toBe(users.lastName);
});