const firstCommentUser = require("./exp2");

test("İlk yorumu kim yazdı = 88f24bea-3825-4237-a0d1-efb6b92d37a4 olmali ", () => {
  expect(firstCommentUser.id).toContain("88f24bea-3825-4237-a0d1-efb6b92d37a4");
});
