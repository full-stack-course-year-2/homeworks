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

let total=0;
for (let i= 0; i<people.length; i++){
 total = total + Number(people[i].salary);
}
//console.log("avarage salary : " + total/people.length)

// 2) Şu anda 30 yaşından büyük kişiler kimlerdir?


let newPeople = people.map(person=> {
    return{
        ...person,
        age: 2022 - Number(person.DOB.slice(6,10)),
          }
   
});


//console.log(newPeople.filter(person=>(person.age > 30)))


// 3) Kişilerin tam adının bir listesini alın (ad ve soyadı).


isimListesi = [];

people.map(person =>{
    return  isimListesi.push(person.firstName + ' '+ person.lastName);
       
})

//console.log(isimListesi);



// 4) Küçükten büyüğe doğru sıralanmış dizideki kişilerin bir listesini alın.

let kb = people.sort ((a,b)=> new Date(a.DOB) - new Date(b.DOB))

//console.log(kb)



// 5) Her bölümde kaç kişi var? 

let bolumler = people.reduce ((toplam, bolum)=>{
    if(toplam[bolum.department]){
        toplam[bolum.department]++;
    }else{
        toplam[bolum.department]=1
    }
    return toplam
},{});

//console.log(bolumler)