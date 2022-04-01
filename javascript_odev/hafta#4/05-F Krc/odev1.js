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

let sonuc = null;

//***MAP***
//1. Tüm isimlerin dizisini al
sonuc = characters.map(item => {
    return {
        name:item.name,
    }});
console.log('Tüm isimlerin dizisini al');
console.log(sonuc);

//2. Tüm yüksekliklerin dizisini al
sonuc = characters.map(item => {
    return {
        height:item.height,
    }});
console.log('Tüm yüksekliklerin dizisini al');
console.log(sonuc);

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
sonuc = characters.map(item => {
    return {
        name:item.name,
        height:item.height,
    }});
console.log('Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın');    
console.log(sonuc);

//4. Tüm ilk isimlerin dizisini al
sonuc = characters.map(item => {
    return {
        name:item.name.split(' ',1),
    }});
console.log('Tüm ilk isimlerin dizisini al');
console.log(sonuc);


//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın
sonuc = characters.reduce((accumulator , item) => {
    accumulator = accumulator + item.mass;
    return accumulator;
}, 0);
console.log('Tüm karakterlerin toplam kütlesini alın');
console.log(sonuc);

//2. Tüm karakterlerin toplam yüksekliğini alın
sonuc = characters.reduce((accumulator , item) => {
    accumulator = accumulator + item.height;
    return accumulator;
}, 0);
console.log('Tüm karakterlerin toplam yüksekliğini alın');
console.log(sonuc);

//3. Göz rengine göre toplam karakter sayısını alın
let gruplama = characters.reduce((acc, item) => {
    (acc[item.eye_color])? acc[item.eye_color]++ : acc[item.eye_color] = 1;
    return acc;
}, {});
console.log('Göz rengine göre toplam karakter sayısını alın');
console.log(gruplama);

//4. Tüm karakter adlarındaki toplam karakter sayısını alın
sonuc = characters.reduce((accumulator , item) => {
    accumulator = accumulator + item.name.length;
    return accumulator;
}, 0);
console.log('Tüm karakter adlarındaki toplam karakter sayısını alın');
console.log(sonuc);


//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın
sonuc = characters.filter(item => (item.mass > 100 ) );
console.log('100 den büyük kütleye sahip karakterler alın');
console.log(sonuc);

//2. 200'den az yüksekliğe sahip karakterler alın
sonuc = characters.filter(item => (item.height < 200 ) );
console.log('200 den az yüksekliğe sahip karakterler alın');
console.log(sonuc);

//3. Tüm erkek karakterleri al
sonuc = characters.filter(item => item.gender == 'male');
console.log('Tüm erkek karakterleri al');
console.log(sonuc);

//4. Tüm kadın karakterleri al
sonuc = characters.filter(item => item.gender == 'female');
console.log('Tüm kadın karakterleri al');
console.log(sonuc);


//***SORT***
//1. Kütleye göre sırala
kiloSirali = characters.sort(function (x, y) {
    return x.mass - y.mass;
});
console.log('Kütleye göre sırala');
console.log(kiloSirali);

//2. Yüksekliğe göre sırala
boySirali = characters.sort(function (k, l) {
    return k.height - l.height;
});
console.log('Yüksekliğe göre sırala');
console.log(boySirali);

//3. İsme göre sırala
let isimSirali = characters.sort((a,b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? 1 : 0));
console.log('İsme göre sırala');
console.log(isimSirali);

//4. Cinsiyete göre sırala
 cinsytSirali = characters.sort(function (t, u) {
  let c = t.gender.toUpperCase(),
      d = u.gender.toUpperCase();
  return c == d ? 0 : c > d ? 1 : -1;
});
console.log('Cinsiyete göre sırala');
console.log(cinsytSirali);


//***EVERY***
//1. Her karakterin mavi gözleri var mı?
sonuc = characters.every(item => item.eye_color == 'blue');
console.log('Her karakterin mavi gözleri var mı?');
console.log(sonuc);

//2. Her karakterin kütlesi 40'tan fazla mı?
sonuc = characters.every(item => item.mass > 40);
console.log('Her karakterin kütlesi 40 tan fazla mı?');
console.log(sonuc);

//3. Her karakter 200'den kısa mı?
sonuc = characters.every(item => item.height < 200 );
console.log('Her karakter 200 den kısa mı?');
console.log(sonuc);

//4. Her karakter erkek mi?
sonuc = characters.every(item => item.gender == 'male');
console.log('Her karakter erkek mi?');
console.log(sonuc);


//***SOME***
//1. En az bir erkek karakter var mı?
sonuc = characters.some(item => item.gender == 'male');
console.log('En az bir erkek karakter var mı?');
console.log(sonuc);

//2. Mavi gözlü en az bir karakter var mı?
sonuc = characters.some(item => item.eye_color == 'blue');
console.log('Mavi gözlü en az bir karakter var mı?');
console.log(sonuc);

//3. 210'dan uzun en az bir karakter var mı?
sonuc = characters.some(item => item.height > 210);
console.log('210 dan uzun en az bir karakter var mı?');
console.log(sonuc);

//4. Kütlesi 50'den az olan en az bir karakter var mı?
sonuc = characters.some(item => item.mass < 50);
console.log('Kütlesi 50 den az olan en az bir karakter var mı?');
console.log(sonuc);