const result = require('./exp2');

test("ilk yorumu yapan kullanıcı kimliği = 88f24bea-3825-4237-a0d1-efb6b92d37a4 olmalı", () => {
    expect(result.id).toBe('88f24bea-3825-4237-a0d1-efb6b92d37a4');
});