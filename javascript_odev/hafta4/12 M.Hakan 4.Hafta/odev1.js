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

let isim= [];
characters.forEach(character=>{
    return isim.push(character.name)
});
//console.log(isim)


//2. Tüm yüksekliklerin dizisini al

let yükseklik= [];
characters.forEach(character=>{
    return yükseklik.push(character.height)
});
//console.log(yükseklik)

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın

let adYükseklik= characters.map(character=>{
    return {
       name:character.name,
       height:character.height

}});
//console.log(adYükseklik)

//4. Tüm ilk isimlerin dizisini al

let tamİsim= [];
characters.forEach(character=>{
    return tamİsim.push(character.name)
});

let ilkisim=[];

tamİsim.map(tmism=>{
    return ilkisim.push(tmism.slice(0,tmism.search(" ")))
})

//console.log(ilkisim)



//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın

    let massSonuc=characters.reduce((total,character)=>{
        total= total + character.mass;
        return total;
    },0);

    //console.log(massSonuc)

//2. Tüm karakterlerin toplam yüksekliğini alın

const heightSonuc=characters.reduce((total,character)=>{
    total= total + character.height;
    return total;
},0);

//console.log(heightSonuc)

//3. Göz rengine göre toplam karakter sayısını alın


const gözSonuc=characters.reduce((total,character)=>{
    if (total[character.eye_color]){
        total[character.eye_color]++;
    }else{
        total[character.eye_color]=1;
    }
    return total
},{});

//console.log(gözSonuc)

//4. Tüm karakter adlarındaki toplam karakter sayısını alın
const charSonuc=characters.reduce((total,character)=>{
    total= total + character.name.length;
    return total;
},0);

//console.log(charSonuc)


//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın

let biggerThan100 = characters.filter(character=>(character.mass > 100))

//console.log(biggerThan100)

//2. 200'den az yüksekliğe sahip karakterler alın

let smallerThan200 = characters.filter(character=>(character.height < 200))

//console.log(smallerThan200)

//3. Tüm erkek karakterleri al

let manCharacter = characters.filter(character=>(character.gender == "male" ))

//console.log(manCharacter)

//4. Tüm kadın karakterleri al

let femaleCharacter = characters.filter(character=>(character.gender == "female" ))

//console.log(femaleCharacter)

//***SORT***
//1. Kütleye göre sırala

let massSırala = characters.sort((a,b)=> (a.mass-b.mass))
//console.log(massSırala)

//2. Yüksekliğe göre sırala


let heightSırala = characters.sort((a,b)=> (a.height-b.height))
//console.log(heightSırala)

//3. İsme göre sırala


let nameSırala = characters.sort((a,b)=> (a.name  == b.name)? 0 : (a.name > b.name)? 1 : -1)
//console.log(nameSırala)


//4. Cinsiyete göre sırala

let cinsiyetSırala = characters.sort((a,b)=> (a.gender  == b.gender)? 0 : (a.gender > b.gender) -1)
//console.log(cinsiyetSırala)


//***EVERY***
//1. Her karakterin mavi gözleri var mı?

let mavi = characters.every(character => character.eye_color == 'blue')
//console.log(mavi)

//2. Her karakterin kütlesi 40'tan fazla mı?

let kütle = characters.every(character => character.mass > 40 )
//console.log(kütle)

//3. Her karakter 200'den kısa mı?

let height = characters.every(character => character.height < 200 )
//console.log(height)


//4. Her karakter erkek mi?

let cinsiyet = characters.every(character => character.gender =="male" )
//console.log(cinsiyet)


//***SOME***
//1. En az bir erkek karakter var mı?

let cinsiyetMale = characters.some(character => character.gender =="male" )
//console.log(cinsiyetMale)

//2. Mavi gözlü en az bir karakter var mı?

let maviBiri = characters.some(character => character.eye_color == 'blue')
//console.log(maviBiri)

//3. 210'dan uzun en az bir karakter var mı?

let heightBiri = characters.some(character => character.height > 210 )
//console.log(heightBiri)


//4. Kütlesi 50'den az olan en az bir karakter var mı?

let kütleBiri = characters.some(character => character.mass < 50 )
//console.log(kütleBiri)