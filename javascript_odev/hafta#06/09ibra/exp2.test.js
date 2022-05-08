const { test, expect } = require('@jest/globals')
const sonuc = require('./exp2')

test('ilk yorumu yapanin idsi = 88f24bea-3825-4237-a0d1-efb6b92d37a4 olmalidir', () => {
    expect(sonuc.id).toBe('88f24bea-3825-4237-a0d1-efb6b92d37a4');
});