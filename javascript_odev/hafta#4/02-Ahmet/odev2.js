const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// 1) Dizideki tüm insanların ortalama geliri nedir? (acc = accumulator = toplayıcı parametre)
console.log("1- Dizideki tüm insanların ortalama geliri")
let salarySum = people.reduce((accumulator, item) => {
    accumulator += Number(item.salary);
    return accumulator;
}, 0);
console.log(salarySum);

// 2) Şu anda 30 yaşından büyük kişiler kimlerdir?
console.log("2- Şu anda 30 yaşından büyük kişiler")
 const yasKontrol = people.map((item) => {
    const yil = item.DOB.split("/")[2];
     const simdikiYil = new Date().getUTCFullYear();
     const yas = simdikiYil - yil;
     return {
         yas,
         ...item,
     };
  }).filter((item)=>item.yas > 30).sort((a, b) => a.yas - b.yas )
  .reverse();

 console.log(yasKontrol)

// 3) Kişilerin tam adının bir listesini alın (ad ve soyadı).
console.log("3- Kişilerin tam adının bir listesini alın (ad ve soyadı)")
let nameMap = people.map(item => {
    return {
        name:item.firstName,
        lastName:item.lastName
    }
});
console.log(nameMap);

// 4) Küçükten büyüğe doğru sıralanmış dizideki kişilerin bir listesini alın.

console.log("4- Küçükten büyüğe doğru sıralanmış dizideki kişilerin bir listesini")
 const yasSiralama = people.map((item) => {
    const yil = item.DOB.split("/")[2];
     const simdikiYil = new Date().getUTCFullYear();
     const yas = simdikiYil - yil;
     return {
         yas,
         ...item,
     };
  }).sort((a, b) => a.yas - b.yas );

 console.log(yasSiralama)


// 5) Her bölümde kaç kişi var? 
console.log("5- Her bölümde kaç kişi var")
let grupBolum = people.reduce((grupBolum, item) => {
    (grupBolum[item.department]) ? grupBolum[item.department]++ : grupBolum[item.department] = 1;
    return grupBolum; 
}, {});
console.log(grupBolum);



//-------------------------------------------------------------



