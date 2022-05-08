const greatThanksUser = require('./exp3');

test("Jar Burke 'Tamam harika teşekkürler' yorumunu yapmıs olmalı", () => {
    expect(`${greatThanksUser.firstName} ${greatThanksUser.lastName}`).toBe("Jar Burke");
});