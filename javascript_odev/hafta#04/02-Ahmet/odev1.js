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
console.log("1- MAP ile Tüm isimlerin dizisini alındı")
let nameMap = characters.map(item => {
    return {
        name:item.name
    }
});
console.log(nameMap);

//2. Tüm yüksekliklerin dizisini al
console.log("2- MAP ile Tüm yüksekliklerin dizisini alındı")
let heightMap = characters.map(item =>{
    return {
        height:item.height
    }
});
console.log(heightMap);

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
console.log("3- MAP ile Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alındı")
let nameHeight = characters.map(item => {
    return {
        name:item.name,
        height:item.height
    }
});
console.log(nameHeight);

//4. Tüm ilk isimlerin dizisini al
console.log("4- MAP ile Tüm ilk isimlerin dizisini alındı")
let nameFirst = characters.map(item => {
    return {
        name:item.name.split(" ").splice(0,1)
    }
});
console.log(nameFirst);


//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın
console.log("1- REDUCE ile Tüm karakterlerin toplam kütlesini alındı")
let massSum = characters.reduce((accumulator, item) => {
    accumulator += item.mass;
    return accumulator;
}, 0);
console.log(massSum);

//2. Tüm karakterlerin toplam yüksekliğini alın
console.log("2- REDUCE ile Tüm karakterlerin toplam yüksekliğini alındı")
let heightSum = characters.reduce((accumulator, item) => {
    accumulator += item.height;
    return accumulator;
}, 0);
console.log(heightSum);

//3. Göz rengine göre toplam karakter sayısını alın
console.log("3- REDUCE ile öz rengine göre toplam karakter sayısını alındı")
let grupEyeColor = characters.reduce((grupEye, item) => {
    (grupEye[item.eye_color]) ? grupEye[item.eye_color]++ : grupEye[item.eye_color] = 1;
    return grupEye; 
}, {});
console.log(grupEyeColor);

//4. Tüm karakter adlarındaki toplam karakter sayısını alın
console.log("4- REDUCE ile Tüm karakter adlarındaki toplam karakter sayısını alındı")
let karakterSum = characters.reduce((accumulator, item) => {
    accumulator += item.name.length + item.eye_color.length + item.gender.length;
    return accumulator;
}, 0);
console.log(karakterSum);

//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın
console.log("1- FILTER ile 100'den büyük kütleye sahip karakterler alındı");
const filterYuzdenBuyuk = characters.filter(item => (item.mass > 100));
console.log(filterYuzdenBuyuk);

//2. 200'den az yüksekliğe sahip karakterler alın
console.log("2- 200'den az yüksekliğe sahip karakterler alındı");
const filterList = characters.filter(item => (item.mass < 200))
console.log(filterYuzdenBuyuk);

//3. Tüm erkek karakterleri al
console.log("3- Tüm erkek karakterleri alındı");
const filterErkekKarakter = characters.filter(item => (item.gender == "male"));
console.log(filterErkekKarakter);

//4. Tüm kadın karakterleri al
console.log("4- Tüm kadın karakterleri alındı");
const filterKadinKarakter = characters.filter(item => (item.gender == "female"));
console.log(filterKadinKarakter);

//***SORT***
//1. Kütleye göre sırala
console.log("1. Kütleye göre sıraya alındı");
const kutleSort = characters.sort((a, b) => a.mass - b.mass);
console.log(kutleSort);

//2. Yüksekliğe göre sırala
console.log("2. Yüksekliğe göre sıraya alındı");
const yuksekSort = characters.sort((a, b) => a.height - b.height);
console.log(yuksekSort);

//3. İsme göre sırala
console.log("3. İsme göre sıraya alındı");
const nameSort = characters.sort(function(a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
       return -1;
    }
    if (nameA > nameB) {
       return 1;
    }
    return 0;
  });
console.log(nameSort);

//4. Cinsiyete göre sırala
console.log("4. Cinsiyete göre sıraya alındı");
const cinsiyetSort = characters.sort(function(a, b) {
    const cinsiyetA = a.gender.toUpperCase(); // ignore upper and lowercase
    const cinsiyetB = b.gender.toUpperCase(); // ignore upper and lowercase
    if (cinsiyetA < cinsiyetB) {
       return -1;
    }
    if (cinsiyetA > cinsiyetB) {
       return 1;
    }
    return 0;
  });
console.log(cinsiyetSort);

// every() , tüm dizi değerlerinin bir testi geçip geçmediğini kontrol eder. Boolean değer döndürür.

//  sonuc = students.every(item => item.bolum == 'mimarlik');
//  console.log(sonuc);
//  console.log("--------------------------");

//***EVERY***
//1. Her karakterin mavi gözleri var mı?
console.log("1. Her karakterin mavi gözleri var mı");
(characters.every(item => item.eye_color ==  'blue')) ? console.log("Her karakterin mavi gözleri var"):console.log("Her karakterin mavi gözleri yok");

//2. Her karakterin kütlesi 40'tan fazla mı?
console.log("2. Her karakterin kütlesi 40'tan fazla mı");
(characters.every(item => item.mass > 40)) ? console.log("Her karakterin kütlesi 40'tan fazla"):console.log("Her karakterin kütlesi 40'tan fazla degil");

//3. Her karakter 200'den kısa mı?
console.log("3. Her karakter 200'den kısa mı");
(characters.every(item => item.mass < 200)) ? console.log("Her karakter 200'den kısa"):console.log("Her karakter 200'den kısa degil");

//4. Her karakter erkek mi?
console.log("4. Her karakter erkek mi");
(characters.every(item => item.gender == 'male')) ? console.log("Her karakter erkek"):console.log("Her karakter erkek degil");

//***SOME***
//1. En az bir erkek karakter var mı?
console.log("1. En az bir erkek karakter var mı");
(characters.some(item => item.gender == 'male')) ? console.log("En az bir erkek karakter var"):console.log("En az bir erkek karakter yok");

//2. Mavi gözlü en az bir karakter var mı?
console.log("2. Mavi gözlü en az bir karakter var mı");
(characters.some(item => item.eye_color == 'blue')) ? console.log("Mavi gözlü en az bir karakter var"):console.log("Mavi gözlü en az bir karakter yok");

//3. 210'dan uzun en az bir karakter var mı?
console.log("3. 210'dan uzun en az bir karakter var mı");
(characters.some(item => item.height > 210)) ? console.log("210'dan uzun en az bir karakter var"):console.log("210'dan uzun en az bir karakter yok");

//4. Kütlesi 50'den az olan en az bir karakter var mı?
console.log("4. Kütlesi 50'den az olan en az bir karakter var mı");
(characters.some(item => item.mass < 50)) ? console.log("Kütlesi 50'den az olan en az bir karakter var"):console.log("Kütlesi 50'den az olan en az bir karakter yok");
