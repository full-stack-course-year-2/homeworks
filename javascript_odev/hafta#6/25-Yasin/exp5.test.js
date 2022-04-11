const result2 = require('./exp5');

test('verilen dizi ile eslesmeli', () => {
    const yorumYapmayanlar =[
    ];
    expect(result2).toMatchObject(yorumYapmayanlar);
})