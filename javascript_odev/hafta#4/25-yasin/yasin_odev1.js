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
let sonuc = null
//***MAP***
//1. Tüm isimlerin dizisini al
sonuc = characters.map(item => {
    return{
         Isim: item.name,
    }
});
console.log(sonuc);


//2. Tüm yüksekliklerin dizisini al
sonuc = characters.map(item =>{
    return{
        Yukseklik:item.height,
    }
});
console.log(sonuc);

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın

sonuc= characters.map(item =>{
    return{
        Isim: item.name,
        Yukseklik:item.height, 
    }
});
console.log(sonuc);
//4. Tüm ilk isimlerin dizisini al
sonuc = characters.map(item=>{
    return{
        Isim: item.name.split(" " , 1),
    }
});

console.log(sonuc);

//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın
sonuc=characters.reduce((accumulator, item) => {
    accumulator = accumulator + item.mass
    return accumulator
}, 0);
console.log('Kutlelerinin toplami:', sonuc);




//2. Tüm karakterlerin toplam yüksekliğini alın
sonuc=characters.reduce((accumulator, item) => {
    accumulator = accumulator + item.height
    return accumulator
}, 0);
console.log('Yukseklik toplami:', sonuc);





//3. Göz rengine göre toplam karakter sayısını alın

const gozRengiGruplama = characters.reduce((acc , item) => {
    if (acc [item.eye_color]){
            acc[item.eye_color]++;
    }else {
        acc[item.eye_color] = 1;
    }
    return acc
}, {});

console.log(gozRengiGruplama);




//4. Tüm karakter adlarındaki toplam karakter sayısını alın

sonuc = characters.reduce((acc, item) => {
    acc = acc + item.name.length
    return acc
}, 0);
console.log("Tüm karakter adlarındaki toplam karakter sayısını:", sonuc)   





//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın
sonuc = characters.filter(item =>(item.mass > 100));
console.log("100'den büyük kütleye sahip karakterler alın", sonuc);



//2. 200'den az yüksekliğe sahip karakterler alın
sonuc = characters.filter(item => (item.height < 200));
console.log("200'den az yüksekliğe sahip karakterler alın", sonuc);



//3. Tüm erkek karakterleri al
sonuc = characters.filter (item => (item.gender == 'male'));
console.log("Tüm erkek karakterleri al", sonuc);



//4. Tüm kadın karakterleri al
sonuc = characters.filter (item => (item.gender == 'female'));
console.log("Tüm kadın karakterleri al", sonuc);




//***SORT***
//1. Kütleye göre sırala
sonuc = characters.sort(function(a, b)  {
    if (a.mass == b.mass) { return 0; };
    if (a.mass < b.mass) { return -1; };
    if (a.mass > b.mass) { return 1; };   
    });
console.log("Kütleye göre sırala:", sonuc);



//2. Yüksekliğe göre sırala
sonuc = characters.sort(function(a, b) {
    if (a.height == b.height) { return 0;};
    if (a.height < b.height) {return -1;};
    if (a.height > b.height) {return 1;};
});
console.log("Yüksekliğe göre sırala:", sonuc);




//3. İsme göre sırala
sonuc = characters.sort(function(a, b) {
    
    if (a.name.length == b.name.length) {return 0;};
    if (a.name.length < b.name.length) {return -1;};
    if (a.name.length > b.name.length)  {return 1;};
    
    
});
console.log("İsme göre sırala:", sonuc);
//4. Cinsiyete göre sırala
sonuc = characters.sort(function(a, b) {
    
    if (a.gender == b.gender) {return 0;};
    if (a.gender < b.gender) {return -1;};
    if (a.gender > b.gender)  {return 1;};
});
console.log("Cinsiyete göre sırala:", sonuc);    




//***EVERY***
//1. Her karakterin mavi gözleri var mı?
sonuc = characters.every(item => (item.eye_color == 'blue'));
console.log("Her karakterin mavi gözleri var mı:", sonuc);


//2. Her karakterin kütlesi 40'tan fazla mı?
sonuc = characters.every(item => (item.mass > 40));
console.log("Her karakterin kütlesi 40'tan fazla mı:", sonuc);


//3. Her karakter 200'den kısa mı?
sonuc = characters.every(item => (item.height < 200));
console.log("Her karakter 200'den kısa mı:", sonuc);


//4. Her karakter erkek mi?
sonuc = characters.every (item => (item.gender == 'male'));
console.log("Her karakter erkek mi:", sonuc);


//***SOME***
//1. En az bir erkek karakter var mı?
sonuc = characters.some(item => (item.gender == 'male'));
console.log("En az bir erkek karakter var mı:", sonuc);


//2. Mavi gözlü en az bir karakter var mı?
sonuc = characters.some(item => (item.eye_color == 'blue'));
console.log("Mavi gözlü en az bir karakter var mı:", sonuc);


//3. 210'dan uzun en az bir karakter var mı?
sonuc = characters.some(item => (item.height > 210));
console.log("210'dan uzun en az bir karakter var mı:", sonuc);


//4. Kütlesi 50'den az olan en az bir karakter var mı?
sonuc = characters.some(item => (item.mass < 50));
console.log("Kütlesi 50'den az olan en az bir karakter var mı", sonuc);