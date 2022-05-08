const kullanici = require('./exp1.js');

test("Madison Marshall'in id Numarasi: 'b4a306cb-8b95-4f85-b9f8-434dbe010985' olmali", () => {
    expect(kullanici.id).toBe('b4a306cb-8b95-4f85-b9f8-434dbe010985')
});