const camelCase = require("camelcase");
console.log(camelCase("bir-gun-gunes-bizim-icin-dogacak"));
console.log(camelCase("her sey guzel olacak"));

//------------------------------------------------------------------------------

const generator = require("generate-password");
const password = generator.generate({
  length: 14,
  numbers: true,
  lowercase: true,
});
console.log(password);

//------------------------------------------------------------------------------
