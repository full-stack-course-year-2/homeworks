const result = require('./Exp2.js');

test('ilk yorumu yapan kullanici bilgisi', () => {
    const sonuc2 = 
        {
            id: '88f24bea-3825-4237-a0d1-efb6b92d37a4',
            firstName: 'Sam',
            lastName: 'Hughes'
          }
    
    expect(result).toMatchObject(sonuc2);
});