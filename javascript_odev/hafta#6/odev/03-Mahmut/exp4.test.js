const comments = require("./exp4");

test("Yorumlar dizisindeki her yoruma kullanıcının adını ve soyadı olmali", () => {
  //   expect(comment.firstName).toBe(user.firstName);
  //   expect(comment.lastName).toBe(user.lastName);
  expect(comments[0]).toHaveProperty("firstName" && "lastName");
});
