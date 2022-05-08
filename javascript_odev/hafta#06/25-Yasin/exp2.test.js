const kullanici2 = require('./exp2.js')

test('Ilk Yorumu yapanin id 88f24bea-3825-4237-a0d1-efb6b92d37a4 olmali', () => {
    expect(kullanici2.id).toBe('88f24bea-3825-4237-a0d1-efb6b92d37a4');
})