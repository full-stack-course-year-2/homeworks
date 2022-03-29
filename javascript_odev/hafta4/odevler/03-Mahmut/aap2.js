const people = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: "07/07/1978",
    department: "Development",
    salary: "45000",
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: "02/04/1989",
    department: "Development",
    salary: "35000",
  },
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: "11/01/1985",
    department: "Marketing",
    salary: "38000",
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: "12/07/1991",
    department: "Sales",
    salary: "40000",
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: "03/15/1988",
    department: "Development",
    salary: "41000",
  },
  {
    firstName: "Madison",
    lastName: "Marshall",
    DOB: "09/22/1980",
    department: "Sales",
    salary: "32000",
  },
  {
    firstName: "Ava",
    lastName: "Pena",
    DOB: "11/02/1986",
    department: "Development",
    salary: "38000",
  },
  {
    firstName: "Gabriella",
    lastName: "Steward",
    DOB: "08/26/1994",
    department: "Marketing",
    salary: "46000",
  },
  {
    firstName: "Charles",
    lastName: "Campbell",
    DOB: "09/04/1977",
    department: "Sales",
    salary: "42000",
  },
  {
    firstName: "Tiffany",
    lastName: "Lambert",
    DOB: "05/11/1990",
    department: "Development",
    salary: "34000",
  },
  {
    firstName: "Antonio",
    lastName: "Gonzalez",
    DOB: "03/24/1985",
    department: "Office Management",
    salary: "49000",
  },
  {
    firstName: "Aaron",
    lastName: "Garrett",
    DOB: "09/04/1985",
    department: "Development",
    salary: "39000",
  },
];

// 1) Dizideki tüm insanların ortalama geliri nedir? (acc = accumulator = toplayıcı parametre)
const ortalamaGelir =
  people.reduce((acc, person) => acc + parseInt(person.salary), 0) /
  people.length;
console.log(ortalamaGelir);

// 2) Şu anda 30 yaşından büyük kişiler kimlerdir?
const yasFiltrele = (person) =>
  new Date().getFullYear() - new Date(person.DOB).getFullYear() > 30;
const age = people.filter(yasFiltrele);
console.log(age);

// 3) Kişilerin tam adının bir listesini alın (ad ve soyadı).
const allName = people.map(
  (person) => person.firstName + "    " + person.lastName
);
console.log(allName);
// 4) Küçükten büyüğe doğru sıralanmış dizideki kişilerin bir listesini alın.
const sirala = people.sort((a, b) => new Date(b.DOB) - new Date(a.DOB));
console.log(sirala);

// 5) Her bölümde kaç kişi var?
const gruplama = people.reduce((acc, value) => {
  if (acc[value.department]) {
    acc[value.department]++;
  } else {
    acc[value.department] = 1;
  }
  return acc;
}, {});
console.log(gruplama);
