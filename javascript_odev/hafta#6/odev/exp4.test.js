// 4) Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadını ekleyin

const result = require('./exp4');

test('should ', () => {
  const sonuc =[
    {
      userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4',
      text: 'Great Job!',
      firstName: 'Sam',
      lastName: 'Hughes'
    },
    {
      userId: '7f053852-7440-4e44-838c-ddac24611050',
      text: 'Well done, I think I understand now!',
      firstName: 'Jar',
      lastName: 'Burke'
    },
    {
      userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be',
      text: 'How do you do that? �',
      firstName: 'Madison',
      lastName: 'Lambert'
    },
    {
      userId: '7f053852-7440-4e44-838c-ddac24611050',
      text: 'OK great thanks',
      firstName: 'Jar',
      lastName: 'Burke'
    },
    {
      userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985',
      text: 'Cool, thanks!',
      firstName: 'Madison',
      lastName: 'Marshall'
    },
    {
      userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6',
      text: 'Nice one �',
      firstName: 'Charles',
      lastName: 'Campbell'
    },
    {
      userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c',
      text: 'Got it.',
      firstName: 'Ava',
      lastName: 'Pena'
    },
    {
      userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6',
      text: 'Thanks!',
      firstName: 'Charles',
      lastName: 'Campbell'
    },
    {
      userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64',
      text: 'Cool �',
      firstName: 'Chester',
      lastName: 'Flores'
    },
    {
      userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c',
      text: 'Great stuff!',
      firstName: 'Ava',
      lastName: 'Pena'
    }
  ];
  expect(result).toMatchObject(sonuc)
})
