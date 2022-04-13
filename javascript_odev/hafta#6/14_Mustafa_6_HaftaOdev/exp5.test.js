const result = require("./exp5");

test("verilen dizi ile eşleşmeli", () => {
  const yorumYapmayanlar = [
    {
      id: "2a35032d-e02b-4508-b3b5-6393aff75a53",
      firstName: "Terri",
      lastName: "Bishop",
    },
    {
      id: "d456e3af-596a-4224-b1dc-dd990a34c9cf",
      firstName: "Julio",
      lastName: "Miller",
    },
    {
      id: "7f0ce45a-bdca-4067-968b-d908e79276ce",
      firstName: "Gabriella",
      lastName: "Steward",
    },
  ];
  expect(result).toMatchObject(yorumYapmayanlar);
});