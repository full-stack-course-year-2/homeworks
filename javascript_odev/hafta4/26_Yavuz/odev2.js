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
let sonuc1 = people.reduce((acc, item) => acc + Number(item.salary),0); // string olan salary nasil toplayacagiz
console.log(sonuc1/people.length);

// 2) Şu anda 30 yaşından büyük kişiler kimlerdir?

const nowDate = new Date();

// for (let person of people) {
//     let age = nowDate.getFullYear() - Number(person.DOB.substr(6,4));
//     console.log(age);
// }

let sonuc2 = people.filter(person => (nowDate.getFullYear() - Number(person.DOB.substr(6,4)))  > 40 );
console.log(sonuc2);

// 3) Kişilerin tam adının bir listesini alın (ad ve soyadı).
// let fullName = ${people.firstName} ${people.lastName}
let sonuc3 = people.map(item => {
    return {
        fullName: item.firstName + " " + item.lastName
    }
});

console.log(sonuc3);

// 4) Küçükten büyüğe doğru sıralanmış dizideki kişilerin bir listesini alın.

let zaman = new Date();
result = people.map(person => {
    return {
        ...person,
       newage :(zaman.getFullYear() - Number(person.DOB.substr(6,4)))     
}});
let sonucMy = result.sort ((a,b) => {
         return a.newage - b.newage        
          });
console.log(sonucMy);

let sonuc4 = people.sort((a, b) => { 
    let x=new Date(a.DOB);
    let y=new Date(b.DOB);
    return y - x;
    });
console.log(sonuc4);

// 5) Her bölümde kaç kişi var? 
sonuc = people.reduce((acc, item) => {
    (acc[item.department])? acc[item.department]++ : acc[item.department] = 1
    return acc;
}, {});
console.log(sonuc);