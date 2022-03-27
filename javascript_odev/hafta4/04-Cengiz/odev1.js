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
let names = [];
characters.forEach(value => {
    names.push(value.name);
})
console.log(names);

const namesWithMap = characters.map(item => {
    return {
        name: item.name,
    };
});
console.log(namesWithMap);

//2. Tüm yüksekliklerin dizisini al
let heights = [];
characters.forEach(value => {
    heights.push(value.height);
})
console.log(heights);

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
const namesAndHeights = characters.map(item => {
    return {
        name: item.name,
        height: item.height,
    };
});
console.log(namesAndHeights);

//4. Tüm ilk isimlerin dizisini al
const firstnamesWithMap = characters.map(item => {
    return {
        firstname: (item.name.split(" "))[0],
    };
});
console.log(firstnamesWithMap);

//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın
const totalMass = characters.reduce((accumulator , item) => {
    accumulator = accumulator + item.mass;
    return accumulator;
},0);
console.log(totalMass);

//2. Tüm karakterlerin toplam yüksekliğini alın
const totalHeight = characters.reduce((accumulator , item) => {
    accumulator = accumulator + item.height;
    return accumulator;
},0);
console.log(totalHeight);

//3. Göz rengine göre toplam karakter sayısını alın
const groupingByEyeColor = characters.reduce((accumulator , item) => {
    (accumulator[item.eye_color]) ? accumulator[item.eye_color]++ : accumulator[item.eye_color] = 1
    
    return accumulator;
},{});
console.log(groupingByEyeColor);

//4. Tüm karakter adlarındaki toplam karakter sayısını alın
const totalChar = characters.reduce((accumulator , item) => {
    //remove the space
    accumulator = accumulator + (item.name.replace(/ /g,'')).length;
    return accumulator;
},0);
console.log(totalChar);

//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın
const massFilter = characters.filter(value => {
    return value.mass > 100;
});
console.log(massFilter);

//2. 200'den az yüksekliğe sahip karakterler alın
const heightFilter = characters.filter(value => {
    return value.height < 200;
});
console.log(heightFilter);

//3. Tüm erkek karakterleri al
const maleFilter = characters.filter(value => {
    return value.gender == "male";
});
console.log(maleFilter);

//4. Tüm kadın karakterleri al
const femaleFilter = characters.filter(value => {
    return value.gender == "female";
});
console.log(femaleFilter);

//***SORT***
//1. Kütleye göre sırala
const sortForMass = characters.sort((value1, value2) => {
    return (value1.mass - value2.mass);
})
console.log(sortForMass);

//2. Yüksekliğe göre sırala
const sortForHeight = characters.sort((value1, value2) => {
    return (value1.height - value2.height);
})
console.log(sortForHeight);

//3. İsme göre sırala
// *** First way ***
let abc = [];
characters.forEach(value=>{
    abc.push(value.name);
})
console.log(abc.sort());

// *** Second way ***
const sortForName = characters.sort((value1, value2) => {

    if (value1.name.toLowerCase() < value2.name.toLowerCase()) {
        return -1;
    }
    
    if (value1.name.toLowerCase() > value2.name.toLowerCase()) {
        return 1;
    }
        return 0;
})
console.log(sortForName);

//4. Cinsiyete göre sırala
const sortForGender = characters.sort((value1, value2) => {

    if (value1.gender.toLowerCase() < value2.gender.toLowerCase()) {
        return -1;
    } else if (value1.gender.toLowerCase() > value2.gender.toLowerCase()) {
        return 1;
    } else {
        return 0;
    }
})
console.log(sortForGender);

//***EVERY***
//1. Her karakterin mavi gözleri var mı?
const blueEyes = characters.every( value =>{
    return value.eye_color == 'blue';
})
console.log(blueEyes);

//2. Her karakterin kütlesi 40'tan fazla mı?
const massMoreThan40 = characters.every( value =>{
    return value.mass > 40;
})
console.log(massMoreThan40);

//3. Her karakter 200'den kısa mı?
const heightLessThan200 = characters.every( value =>{
    return value.height < 200;
})
console.log(heightLessThan200);

//4. Her karakter erkek mi?
const isMale = characters.every( value =>{
    return value.gender == 'male';
})
console.log(isMale);


//***SOME***
//1. En az bir erkek karakter var mı?
const isAnyMale = characters.some( value =>{
    return value.gender == 'male';
})
console.log(isAnyMale);

//2. Mavi gözlü en az bir karakter var mı?
const isAnyBlueEyes = characters.some( value =>{
    return value.eye_color == 'blue';
})
console.log(isAnyBlueEyes);

//3. 210'dan uzun en az bir karakter var mı?
const isAnyoneTallerThan210 = characters.some( value =>{
    return value.height > 210;
})
console.log(isAnyoneTallerThan210);

//4. Kütlesi 50'den az olan en az bir karakter var mı?
const isAnyoneLessThan50 = characters.some( value =>{
    return value.mass < 50;
})
console.log(isAnyoneLessThan50);