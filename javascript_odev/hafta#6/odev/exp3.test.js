// 3) Hangi kullanıcı 'OK great thanks' yorumunu yaptı?

const result = require('./exp3');

test('should ', () => {
  const sonuc ={
    id: '7f053852-7440-4e44-838c-ddac24611050',
    firstName: 'Jar',
    lastName: 'Burke'
  }

  expect(result).toMatchObject(sonuc)
})
