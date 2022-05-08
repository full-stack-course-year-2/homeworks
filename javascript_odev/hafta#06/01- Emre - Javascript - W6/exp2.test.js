const result = require('./exp2');

test("Madison Marshall'ın kullanıcı kimliği = b4a306cb-8b95-4f85-b9f8-434dbe010985 olmalı", () => {
    expect(result.id).toBe('88f24bea-3825-4237-a0d1-efb6b92d37a4');
});