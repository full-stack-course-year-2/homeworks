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
    let result = null;
//***MAP***
//1. Tüm isimlerin dizisini al
    sonuc = characters.map(item => item.name);
    console.log(sonuc);
//2. Tüm yüksekliklerin dizisini al
    sonuc = characters.map(item => {
        return {height: item.height
        }
    });
    console.log(sonuc);
//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
    sonuc = characters.map(item => {
        return  {
            name: item.name,
            height: item.height
        }
    });
    console.log(sonuc);
//4. Tüm ilk isimlerin dizisini al
    sonuc = characters.map(item => {
        return {
        firstName:item.name.split(" ")[0]
        }});
    console.log(sonuc);


//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın
    sonuc = characters.reduce((toplam , kütle) => (toplam + kütle.mass),0);
    console.log(sonuc);
//2. Tüm karakterlerin toplam yüksekliğini alın
    sonuc = characters.reduce((toplam , yükseklik) => (toplam + yükseklik.height),0);
    console.log(sonuc);
//3. Göz rengine göre toplam karakter sayısını alın
    sonuc = characters.reduce((acc, item ) => {
        if(acc[item.eye_color]){
            acc[item.eye_color]++;
        }else{
            acc[item.eye_color] = 1;
        }
        return acc;
    }, {});
    console.log(sonuc);
//4. Tüm karakter adlarındaki toplam karakter sayısını alın 
    sonuc = characters.reduce((acc , item) => {
        (acc[item.name])?  acc[item.name]++ : acc[item.name] = 1;
        return acc;
    },{});
    console.log(sonuc);


//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın
     sonuc = characters.filter(yuzdenBuyuk => yuzdenBuyuk.mass > 100 );
     console.log(sonuc);

//2. 200'den az yüksekliğe sahip karakterler alın   
     sonuc = characters.filter(yukseklik => yukseklik.height < 200 );
     console.log(sonuc);

//3. Tüm erkek karakterleri al
    sonuc = characters.filter(erkek => erkek.gender == "male" );
    console.log(sonuc);

//4. Tüm kadın karakterleri al
    sonuc = characters.filter(kadin => kadin.gender == "female" );
    console.log(sonuc);

//***SORT***
//1. Kütleye göre sırala
    sonuc = characters.sort((a , b) => (a.mass - b.mass));
    console.log(sonuc);
//2. Yüksekliğe göre sırala
    sonuc = characters.sort((a , b) => (b.height - a.height));
    console.log(sonuc);
//3. İsme göre sırala
    sonuc = characters.sort((a , b) => {
        if(a.name < b.name) {
            return -1
        }else if (a.name < b.name) {
            return 1
        }else {
            return 0
        }
    });
    console.log(sonuc);
//4. Cinsiyete göre sırala
    sonuc = characters.sort((a , b) => (a.gender == b.gender)? 0 : -1);
    console.log(sonuc);


//***EVERY***
//1. Her karakterin mavi gözleri var mı?
    sonuc = characters.every(gozRengi => gozRengi.eye_color == "blue");
    console.log(sonuc);

//2. Her karakterin kütlesi 40'tan fazla mı?
    sonuc = characters.every(kütle => kütle.mass > 40 );
    console.log(sonuc);

//3. Her karakter 200'den kısa mı?
    sonuc = characters.every(boy => boy.height < 200 );
    console.log(sonuc);

//4. Her karakter erkek mi?
    sonuc = characters.every(cins => cins.gender == "male" );
    console.log(sonuc);


//***SOME***
//1. En az bir erkek karakter var mı?
    sonuc = characters.some(erk => erk.gender < "male" );
    console.log(sonuc);

//2. Mavi gözlü en az bir karakter var mı?
    sonuc = characters.some(gozRengi => gozRengi.eye_color > "blue" );
    console.log(sonuc);

//3. 210'dan uzun en az bir karakter var mı?
    sonuc = characters.some(boy => boy.height > 210 );
    console.log(sonuc);

//4. Kütlesi 50'den az olan en az bir karakter var mı?
    sonuc = characters.some(kütle => kütle.mass < 50 );
    console.log(sonuc);