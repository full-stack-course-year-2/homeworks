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
sonuc=characters.map(item=>{
    return item.name
})
console.log(sonuc);

//2. Tüm yüksekliklerin dizisini al
sonuc=characters.map(item=>{
    return item.height
})
console.log(sonuc);

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
sonuc=characters.map(item=>{
    return{
        adı:item.name,
        yukseklık:item.height,
    }
})
console.log(sonuc);
//4. Tüm ilk isimlerin dizisini al
sonuc = characters.map(item => item.name.split(" ") [0]);
console.log(sonuc);



//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın
sonuc=characters.reduce((acc,ıtem)=>{
    acc=acc+ıtem.mass;
    return acc;
   },0);
   console.log('toplam Kutle= ' +sonuc);
//2. Tüm karakterlerin toplam yüksekliğini alın
sonuc=characters.reduce((acc,ıtem)=>{
    acc=acc+ıtem.height;
    return acc;
   },0);
   console.log('toplam Yukseklık= ' +sonuc);
//3. Göz rengine göre toplam karakter sayısını alın
sonuc=characters.reduce((acc,value)=>{
    if(acc[value.eye_color]){
        acc[value.eye_color]=acc[value.eye_color]+1;
    }else{
        acc[value.eye_color]=1;
    }
    return acc;
},{})
console.log(sonuc);
//4. Tüm karakter adlarındaki toplam karakter sayısını alın
sonuc = characters.reduce((acc, item) => acc + item.name.length, 0);
console.log(sonuc);


//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın
sonuc=characters.filter(item=>item.mass>100)
console.log(sonuc);
//2. 200'den az yüksekliğe sahip karakterler alın
sonuc=characters.filter(item=>item.height<200)
console.log(sonuc);
//3. Tüm erkek karakterleri al
sonuc=characters.filter(item=>item.gender=='male')
console.log(sonuc);
//4. Tüm kadın karakterleri al
sonuc=characters.filter(item=>item.gender=='female')
console.log(sonuc);



//***SORT***
// //1. Kütleye göre sırala
result=characters.sort((a,b)=>a.mass-b.mass);
console.log(result);
// //2. Yüksekliğe göre sırala
sonuc=characters.sort((a,b)=>a.height-b.height);
console.log(sonuc);
//3. İsme göre sırala
characters.sort((ıtem,value)=>{
    if(ıtem.name<value.name) {
     return -1}else{
     return 1;}
})
console.log(characters)
//4. Cinsiyete göre sırala
sonuc=characters.sort((a,b)=>{
    if(a.gender=='female'){
        return -1;
    }else{
        return 1;
    }
})
console.log(sonuc)

//***EVERY***
//1. Her karakterin mavi gözleri var mı?
sonuc=characters.every(item=>item.eye_color == 'blue')
console.log(sonuc);
//2. Her karakterin kütlesi 40'tan fazla mı?
sonuc=characters.every(item=>item.mass > 40);
console.log(sonuc);
//3. Her karakter 200'den kısa mı?
sonuc=characters.every(item=>item.height <200);
console.log(sonuc);
//4. Her karakter erkek mi?
sonuc=characters.every(item=>item.gender == 'male');
console.log(sonuc);


//***SOME***
//1. En az bir erkek karakter var mı?
sonuc=characters.some(ıtem=>ıtem.gender=='male')
console.log(sonuc);
//2. Mavi gözlü en az bir karakter var mı?
sonuc=characters.some(ıtem=>ıtem.eye_color =='blue')
console.log(sonuc);
//3. 210'dan uzun en az bir karakter var mı?
sonuc=characters.some(item=>item.height > 210)
console.log(sonuc);
//4. Kütlesi 50'den az olan en az bir karakter var mı?
sonuc=characters.some(item=>item.mass<50);
console.log(sonuc);