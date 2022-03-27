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
kutle = characters.reduce(item => item.mass);
console.log(kutle);
//2. Tüm karakterlerin toplam yüksekliğini alın
//3. Göz rengine göre toplam karakter sayısını alın
//4. Tüm karakter adlarındaki toplam karakter sayısını alın


//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın

kutle = characters.filter(mass => {
    return characters.mass >= 100;
    console.log(kutle);

//2. 200'den az yüksekliğe sahip karakterler alın
//3. Tüm erkek karakterleri al
//4. Tüm kadın karakterleri al


//***SORT***
//1. Kütleye göre sırala

// var sira = characters.sort(a, b) => {(a-b)};
// console.log(sira);

//2. Yüksekliğe göre sırala
//3. İsme göre sırala
//4. Cinsiyete göre sırala


//***EVERY***
//1. Her karakterin mavi gözleri var mı?
//2. Her karakterin kütlesi 40'tan fazla mı?
//3. Her karakter 200'den kısa mı?
//4. Her karakter erkek mi?


//***SOME***
//1. En az bir erkek karakter var mı?
//2. Mavi gözlü en az bir karakter var mı?
//3. 210'dan uzun en az bir karakter var mı?
//4. Kütlesi 50'den az olan en az bir karakter var mı?