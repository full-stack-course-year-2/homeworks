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
let result = null;
// 1) Dizideki tüm insanların ortalama geliri nedir? (acc = accumulator = toplayıcı parametre)
result = people.reduce((acc, item) => {
    acc = acc + Number(item.salary);
    return acc;
}, 0);
console.log(" Dizideki tüm insanların ortalama geliri :", result/people.length);

// 2) Şu anda 30 yaşından büyük kişiler kimlerdir?
let tarih = new Date();
let yil = tarih.getFullYear(); 


result = people.filter(item => (yil - new Date(item.DOB).getFullYear() > 30));
console.log("Su anda 30 yaşından büyük kişiler :", result);


// 3) Kişilerin tam adının bir listesini alın (ad ve soyadı).
result = people.map(item => {
    return{
        
        tamAdi: item.firstName + " " + item.lastName,
    }
});
console.log("Kişilerin tam adının bir listesi:", result);


// 4) Küçükten büyüğe doğru sıralanmış dizideki kişilerin bir listesini alın.
resultDort = people.sort( (a, b) =>{
   return new Date(b.DOB).getFullYear() - new Date(a.DOB).getFullYear()
});

console.log("Küçükten büyüğe doğru sıralanmış dizideki kişilerin bir listesi:", resultDort);    



// 5) Her bölümde kaç kişi var? 
result = people.reduce((acc , item) => {
    if (acc[item.department]){
        acc[item.department] ++;
    }else{
        acc[item.department] = 1;
    }
    return acc;
}, {});

console.log("Her bölümde kaç kişi var:", result);

