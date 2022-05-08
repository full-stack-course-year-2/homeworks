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

let sonuc = null

// 1) Dizideki tüm insanların ortalama geliri nedir? (acc = accumulator = toplayıcı parametre)
gelirler = people.map(item => {
    return {
        salary:Number(item.salary), 
    }});
toplamGelir = gelirler.reduce((accumulator , item) => {
        accumulator = accumulator + item.salary;
        return accumulator;
    }, 0);
console.log('Dizideki tüm insanların ortalama geliri nedir? (acc = accumulator = toplayıcı parametre)');
console.log("Gelir Ortalaması = " + toplamGelir/gelirler.length);

// 2) Şu anda 30 yaşından büyük kişiler kimlerdir?
let date = new Date();

yaslar = people.map(item => {
    return{
        ...item,
        yas : (new Date().getTime() - new Date(item.DOB).getTime())/ 3.15576e+10
    }},0);
sonuc = yaslar.filter(item => (item.yas > 30) );
console.log('Şu anda 30 yaşından büyük kişiler kimlerdir?');
console.log(sonuc);

// 3) Kişilerin tam adının bir listesini alın (ad ve soyadı).
sonuc = people.map(item => {
    return {
        nameSurname:item.firstName.concat(' ').concat(item.lastName),
    }});
console.log('Kişilerin tam adının bir listesini alın (ad ve soyadı).');
console.log(sonuc);

// 4) Küçükten büyüğe doğru sıralanmış dizideki kişilerin bir listesini alın.
yaslar = people.map(item => {
    return{
        ...item,
        yas : (new Date().getTime() - new Date(item.DOB).getTime())/ 3.15576e+10
    }},0);
siralama = yaslar.sort(function (x, y) {
    return x.yas - y.yas;
});
console.log('Küçükten büyüğe doğru sıralanmış dizideki kişilerin bir listesini alın.');
console.log(siralama);

// 5) Her bölümde kaç kişi var? 
let gruplama = people.reduce((acc, item) => {
    (acc[item.department])? acc[item.department]++ : acc[item.department] = 1;
    return acc;
}, {});
console.log('Her bölümde kaç kişi var?');
console.log(gruplama);