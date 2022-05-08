const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Tüm isimlerin dizisini al
result = characters.map (person=>person.name);
console.log (result);

//2. Tüm yüksekliklerin dizisini al
result = characters.map (person =>person.height);
console.log(result);

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
result = characters.map (person => {
    return {
        adi:person.name,
        boyu:person.height
    }
}) ;
console.log(result);

//4. Tüm ilk isimlerin dizisini al
result = characters.map (person => person.name.split (" ",1));
console.log(result);

//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın
result = characters.reduce((acc, person) => {return acc = acc + person.mass;},0);
console.log(result);

//2. Tüm karakterlerin toplam yüksekliğini alın
result = characters.reduce((acc, person) => {return acc = acc + person.height;},0);
console.log(result);

//3. Göz rengine göre toplam karakter sayısını alın
result = characters.reduce((acc,person) => {
    (acc[person.eye_color])?  acc[person.eye_color]++ : acc[person.eye_color] = 1;
    return acc; 
},{});
console.log(result);

//4. Tüm karakter adlarındaki toplam karakter sayısını alın
result = characters.reduce((acc,person) => {
    (acc[person.name])?  acc[person.name]++ : acc[person.name] = 1;
    return acc; 
},{});
console.log(result);

//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın
result = characters.filter(person => person.mass > 100);
console.log(result);

//2. 200'den az yüksekliğe sahip karakterler alın
result = characters.filter(person => person.height < 200);
console.log(result);

//3. Tüm erkek karakterleri al
result = characters.filter(person => person.gender == "male") ;
console.log(result);

//4. Tüm kadın karakterleri al
result = characters.filter(person => person.gender == "female");
console.log(result);

//***SORT***
//1. Kütleye göre sırala
result = characters.sort ((a,b) => a.mass - b.mass);
console.log(result);

//2. Yüksekliğe göre sırala
result = characters.sort ((a,b) => a.height- b.height);
console.log(result);

//3. İsme göre sırala
result = characters.sort((a,b) => (a.name < b.name ? -1 : 1) )
console.log(result);

//4. Cinsiyete göre sırala
result = characters.sort((a,b) => (a.gender == b.gender)? 0 : -1);
console.log(result);

//***EVERY***
//1. Her karakterin mavi gözleri var mı?
result = characters.every(person => person.eye_color == "blue") ;
console.log(result);

//2. Her karakterin kütlesi 40'tan fazla mı?
result = characters.every(person => person.mass > 40) ;
console.log(result);

//3. Her karakter 200'den kısa mı?
result = characters.every(person => person.height > 200) ;
console.log(result);

//4. Her karakter erkek mi?
result = characters.every(person => person.gender == "male");
console.log(result);

//***SOME***
//1. En az bir erkek karakter var mı?
result = characters.some(person => person.gender == "male");
console.log(result);

//2. Mavi gözlü en az bir karakter var mı?
result = characters.some(person => person.eye_color == "male");
console.log(result);

//3. 210'dan uzun en az bir karakter var mı?
result = characters.some(person => person.height > 210);
console.log(result);

//4. Kütlesi 50'den az olan en az bir karakter var mı?
result = characters.some(person => person.mass < 50);
console.log(result);




