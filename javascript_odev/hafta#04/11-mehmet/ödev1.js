
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
result=characters.map(item=>{
    return item.name
})
console.log(result);

//2. Tüm yüksekliklerin dizisini al
result=characters.map(item=>{
    return item.height
})
console.log(result);

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
result=characters.map(item=>{
    return{
        names:item.name,
        heights:item.height,
    }
})
console.log(result);
//4. Tüm ilk isimlerin dizisini al
result = characters.map(item => item.name.split(" ") [0]);
console.log(result);



//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın
result=characters.reduce((acc,item)=>{
    acc=acc+item.mass;
    return acc;
   },0);
   console.log('toplam Kutle= ' +result);
//2. Tüm karakterlerin toplam yüksekliğini alın
result=characters.reduce((acc,item)=>{
    acc=acc+item.height;
    return acc;
   },0);
   console.log('toplam Yukseklık= ' +result);
//3. Göz rengine göre toplam karakter sayısını alın
result=characters.reduce((acc,value)=>{
    if(acc[value.eye_color]){
        acc[value.eye_color]=acc[value.eye_color]+1;
    }else{
        acc[value.eye_color]=1;
    }
    return acc;
},{})
console.log(result);
//4. Tüm karakter adlarındaki toplam karakter sayısını alın
result = characters.reduce((acc, item) => acc + item.name.length, 0);
console.log(result);


//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın
result=characters.filter(item=>item.mass>100)
console.log(result);
//2. 200'den az yüksekliğe sahip karakterler alın
result=characters.filter(item=>item.height<200)
console.log(result);
//3. Tüm erkek karakterleri al
result=characters.filter(item=>item.gender=='male')
console.log(result);
//4. Tüm kadın karakterleri al
result=characters.filter(item=>item.gender=='female')
console.log(result);



//***SORT***
// //1. Kütleye göre sırala
result=characters.sort((a,b)=>a.mass-b.mass);
console.log(result);
// //2. Yüksekliğe göre sırala
result=characters.sort((a,b)=>a.height-b.height);
console.log(result);
//3. İsme göre sırala
characters.sort((item,value)=>{
    if(item.name<value.name) {
     return -1}else{
     return 1;}
})
console.log(characters)
//4. Cinsiyete göre sırala
result=characters.sort((a,b)=>{
    if(a.gender=='female'){
        return -1;
    }else{
        return 1;
    }
})
console.log(result)

//***EVERY***
//1. Her karakterin mavi gözleri var mı?
result=characters.every(item=>item.eye_color == 'blue')
console.log(result);
//2. Her karakterin kütlesi 40'tan fazla mı?
result=characters.every(item=>item.mass > 40);
console.log(result);
//3. Her karakter 200'den kısa mı?
result=characters.every(item=>item.height <200);
console.log(result);
//4. Her karakter erkek mi?
result=characters.every(item=>item.gender == 'male');
console.log(result);


//***SOME***
//1. En az bir erkek karakter var mı?
result=characters.some(item=>item.gender=='male')
console.log(result);
//2. Mavi gözlü en az bir karakter var mı?
result=characters.some(item=>item.eye_color =='blue')
console.log(result);
//3. 210'dan uzun en az bir karakter var mı?
result=characters.some(item=>item.height > 210)
console.log(result);
//4. Kütlesi 50'den az olan en az bir karakter var mı?
result=characters.some(item=>item.mass<50);
console.log(result);