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

resultIsim = characters.map(person => {
    return {
        isim : person.name
    }});

console.log(resultIsim);

//2. Tüm yüksekliklerin dizisini al
resultYükseklik = characters.map(item => {
    return {
        yükseklik : item.height

    }
})

console.log(resultYükseklik)

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
resultIsimYükseklik= characters.map(item => {
    return {
        _isim:item.name , _yükseklik:item.height

    }
})
 console.log(resultIsimYükseklik)
//4. Tüm ilk isimlerin dizisini al
resultIlkIsim = characters.map(item => {
    let parcala = item.name.split(" ");
    return {
        name:parcala[0]
}})
console.log(resultIlkIsim)   



//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın

sonucMass = characters.reduce((accumulator , item) => {
    accumulator = accumulator + item.mass;
    return accumulator;
}, 0);
console.log(sonucMass);

//2. Tüm karakterlerin toplam yüksekliğini alın
sonucHeight = characters.reduce((accumulator , item) => {
    accumulator = accumulator + item.height;
    return accumulator;
}, 0);
console.log(sonucHeight);

//3. Göz rengine göre toplam karakter sayısını alın

const bolumGruplama = characters.reduce((acc , item) => {
    if(acc[item.eye_color]){
        acc[item.eye_color]++;
    }else {
        acc[item.eye_color] = 1;
    }
    return acc;
}, {});

console.log(bolumGruplama);

//4. Tüm karakter adlarındaki toplam karakter sayısını alın
sonucKarakter = characters.reduce((accumulator , item) => {
    accumulator = accumulator + item.name.length;
    return accumulator;
}, 0);
console.log(sonucKarakter);


//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın

let sonuc = null ;
sonuc = characters.filter (item => item.mass > 100 )
console.log(sonuc) ;


//2. 200'den az yüksekliğe sahip karakterler alın

let result = null ;
result = characters.filter (i => i.height < 200 )
console.log(result) ;

//3. Tüm erkek karakterleri al

let result1 = null ;
result1 = characters.filter (item => item.gender == 'female' )
console.log(result1) ;

//4. Tüm kadın karakterleri al
let result2 = null ;
result2 = characters.filter (item => item.gender == 'male' )
console.log(result2) ;


//***SORT***
//1. Kütleye göre sırala

characters.sort((a, b) => (b.mass - a.mass));
console.log(characters);


//2. Yüksekliğe göre sırala
sonuc = characters.sort((a,b)=>new Date(a.DOB) - new Date(b.DOB)); 
console.log(sonuc);

//3. İsme göre sırala
characters.sort(function(a, b){return a.name.localeCompare(b.name)});
console.log(characters) ;

//4. Cinsiyete göre sırala
sonuc = characters.sort((a,b)=>new Date(a.gender) - new Date(b.gender)); 
console.log(sonuc);


//***EVERY***
//1. Her karakterin mavi gözleri var mı?

sonuc = characters.every(item => item.eye_color == 'blue');
console.log(sonuc);

//2. Her karakterin kütlesi 40'tan fazla mı?
sonuc = characters.every(item => item.mass > 40 );
console.log(sonuc);

//3. Her karakter 200'den kısa mı?

sonuc = characters.every(item => item.height < 200 );
console.log(sonuc);

//4. Her karakter erkek mi?

sonuc = characters.every(item => item.gender == 'female' );
console.log(sonuc);

//***SOME***
//1. En az bir erkek karakter var mı?

sonuc = characters.some(item => item.gender == 'male' );
console.log(sonuc);

//2. Mavi gözlü en az bir karakter var mı?

sonuc = characters.some(item => item.eye_color == 'blue' );
console.log(sonuc);

//3. 210'dan uzun en az bir karakter var mı?

sonuc = characters.some(item => item.height > 210 );
console.log(sonuc);

//4. Kütlesi 50'den az olan en az bir karakter var mı?
sonuc = characters.some(item => item.mass < 50 );
console.log(sonuc);