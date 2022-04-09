// 2) İlk yorumu kim yazdı (ilk yorumun yorumlar dizisinin 0 konumunda olduğu varsayılarak)

const result = require('./exp2');

test('ilk yorumu yazan Sam Haghesdir ', () => {
    const sonuc = {
    id: '88f24bea-3825-4237-a0d1-efb6b92d37a4',
    firstName: 'Sam',
    lastName: 'Hughes'
    };
  expect(result).toMatchObject(sonuc)
});
