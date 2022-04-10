const newComments = require('./exp4');

test("Yorumlar dizisindeki her yoruma kullanıcının adı ve soyadı olmalı", () => {
    newComments.forEach((value) => {
        expect(value).toHaveProperty('name');
    }) 
});