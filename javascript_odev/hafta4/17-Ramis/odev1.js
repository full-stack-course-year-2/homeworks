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
isimler = characters.map(item =>{
    return{
        isim:item.name,
    }
});
console.log(isimler);

//2. Tüm yüksekliklerin dizisini al
yukseklik = characters.map(item => {
    return{
        yukseklikDegeri:item.height
    }
});
console.log(yukseklik);

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
adveyukseklik = characters.map(item => {
    return{
       adveyükseklik: (item.name) + ' ' + (item.height)
    }
});
console.log(adveyukseklik);

//4. Tüm ilk isimlerin dizisini al
ilkIsim = characters.map(item => {
    return item.name
});
console.log(ilkIsim);
///


//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın
kutle = characters.reduce((acc, item) => {
    return acc = acc + item.mass;
}, 0);
console.log(kutle);
//2. Tüm karakterlerin toplam yüksekliğini alın

yukseklik = characters.reduce((acc, item) => (acc + item.height), 0);
console.log(yukseklik);

//3. Göz rengine göre toplam karakter sayısını alın

gozRengi = characters.reduce((acc,item) => {
    if(acc[item.eye_color]){
        acc[item.eye_color]++;
    }else {
        acc[item.eye_color] = 1;
    }
    return acc;
}, {});
console.log(gozRengi);
//4. Tüm karakter adlarındaki toplam karakter sayısını alın
result = characters.reduce((acc,item) => {
    (acc[item.name]) ?  acc[item.name]++ : acc[item.name] = 1;
    return acc;
},{});
console.log(result);

//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın

sıralamaKutle = characters.filter(item => item.mass > 100);
console.log(sıralamaKutle);

//2. 200'den az yüksekliğe sahip karakterler alın
silamaHeight = characters.filter(item => item.height < 200);
console.log(silamaHeight);

//3. Tüm erkek karakterleri al
erkek = characters.filter(item => item.gender == 'male');
console.log(erkek);
//4. Tüm kadın karakterleri al
kadin = characters.filter(item => item.gender == 'female');
console.log(kadin);

//***SORT***
//1. Kütleye göre sırala
massSiralama = characters.sort((a,b) => a.mass - b.mass);
console.log(massSiralama);

//2. Yüksekliğe göre sırala

heightSiralama = characters.sort((a,b) => a.height - b.height);
console.log(heightSiralama);

//3. İsme göre sırala
isim = characters.sort((a,b) => {
    if(a.name < b.name) {
        return -1
    } else if (a.name > b.name) {
        return 1
    } else {
        return 0
    }
});
console.log(isim);

//4. Cinsiyete göre sırala

gengerSiralama = characters.sort((a,b) => (a.gender > b.gender)? 1 : -1);
console.log(gengerSiralama);

//***EVERY***
//1. Her karakterin mavi gözleri var mı?
blau = characters.every(item => item.eye_color == 'blue');
console.log(blau);

//2. Her karakterin kütlesi 40'tan fazla mı?

mass = characters.every(item => item.mass > 40 );
console.log(mass);

//3. Her karakter 200'den kısa mı?

result = characters.every(item => item.height < 200 );
console.log(result);

//4. Her karakter erkek mi?

result = characters.every(item => item.gender == 'male');
console.log(result);

//***SOME***
//1. En az bir erkek karakter var mı?

result = characters.some(person => person.gender == 'male');
console.log(result);

//2. Mavi gözlü en az bir karakter var mı?

result = characters.some(person => person.eye_color == 'blue');
console.log(result);

//3. 210'dan uzun en az bir karakter var mı?

result = characters.some(person => person.height > 210);
console.log(result);

//4. Kütlesi 50'den az olan en az bir karakter var mı

result = characters.some(person => person.mass < 50);
console.log(result);