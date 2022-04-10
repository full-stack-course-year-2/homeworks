const firstComment = require('./exp2');

const expectedFirstUser = 
{
    id: '88f24bea-3825-4237-a0d1-efb6b92d37a4',
    firstName: 'Sam',
    lastName: 'Hughes'
}

test("İlk yorumu Sam Hughes yazmıs olmalı", () => {
    expect(firstComment).toMatchObject(expectedFirstUser);
});