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

// map name list from characters
nameList = characters.map(character => {
    return character.name
})
console.log(nameList)


//2. Tüm yüksekliklerin dizisini al

heightList = characters.map(character => {
    return character.height
})
console.log(heightList)

//3. Yalnızca ad ve yükseklik özelliklerine sahip nesne dizisini alın
nameHeightList = characters.map(character => {
    name_ = character.name
    height = character.height
    return {
        'name': name_,
        'height': height
    }
})
console.log(nameHeightList)

//4. Tüm ilk isimlerin dizisini al
firstNameList = characters.map(character => {
    return character.name.split(' ')[0]
})
console.log(firstNameList)




//***REDUCE***
//1. Tüm karakterlerin toplam kütlesini alın
totalMass = characters.reduce((total, character) => {
    return total + character.mass
}, 0)

console.log('Total Mass = ' + totalMass)

//2. Tüm karakterlerin toplam yüksekliğini alın
totalHeight = characters.reduce((total, character) => {
    return total + character.height
}, 0)

console.log('Total Height = ' + totalHeight)
//3. Göz rengine göre toplam karakter sayısını alın

eyeColorList = characters.reduce((total, character) => {
    if (total[character.eye_color] == undefined) {
        total[character.eye_color] = 1
    } else {
        total[character.eye_color] += 1
    }
    return total
}, {})

console.log(eyeColorList)

//4. Tüm karakter adlarındaki toplam karakter sayısını alın
// sum of character.name length
sumOfCharacterNameLength = characters.reduce((total, character) => {
    return total + character.name.length
}, 0)

console.log('Sum of Character Name Length = ' + sumOfCharacterNameLength)


//***FILTER***
//1. 100'den büyük kütleye sahip karakterler alın
listOfBigMass = characters.filter(character => {
    return character.mass > 100
})
console.log(listOfBigMass)
//2. 200'den az yüksekliğe sahip karakterler alın
listOfLowHeight = characters.filter(character => {
    return character.height < 200
})
console.log(listOfLowHeight)

//3. Tüm erkek karakterleri al
listOfGenderMale = characters.filter(character => {
    return character.gender == "male"
})


console.log('listOfGenderMale')
console.log(listOfGenderMale)

//4. Tüm kadın karakterleri al
listOfGenderFemale = characters.filter(character => {
    return character.gender == 'female'
})

console.log(listOfGenderFemale)

//***SORT***
//1. Kütleye göre sırala
sortByMass = characters.sort((a, b) => a.mass - b.mass)
console.log(sortByMass)

//2. Yüksekliğe göre sırala
sortByHeight = characters.sort((a, b) => a.height - b.height)
console.log(sortByHeight)

//3. İsme göre sırala

sortByName = characters.sort((a, b) => {
    if (a.name < b.name) {
        return -1
    } else if (a.name > b.name) {
        return 1
    } else {
        return 0
    }
})
console.log('sortByName')
console.log(sortByName)
//4. Cinsiyete göre sırala
sortByGender = characters.sort((a, b) => {
    if (a.gender < b.gender) {
        return -1
    } else if (a.gender > b.gender) {
        return 1
    } else {
        return 0
    }
})

console.log('sortByGender')
console.log(sortByGender)

//***EVERY***
//1. Her karakterin mavi gözleri var mı?
hasEveryCharacterBlueEyes = characters.every(character => {
    return character.eye_color == 'blue'
})
console.log('hasEveryCharacterBlueEyes = ' + hasEveryCharacterBlueEyes)

//2. Her karakterin kütlesi 40'tan fazla mı?
hasEveryCharacterBigMass = characters.every(character => {
    return character.mass > 40
})
console.log('hasEveryCharacterBigMass = ' + hasEveryCharacterBigMass)

//3. Her karakter 200'den kısa mı?
hasEveryCharacterLowHeight = characters.every(character => {
    return character.height < 200
})
console.log('hasEveryCharacterLowHeight = ' + hasEveryCharacterLowHeight)

//4. Her karakter erkek mi?
hasEveryCharacterGenderMale = characters.every(character => {
    return character.gender == 'male'
})
console.log('hasEveryCharacterGenderMale = ' + hasEveryCharacterGenderMale)



//***SOME***
//1. En az bir erkek karakter var mı?
isThereAtLeastOneMaleCharacter = characters.some(character => {
    return character.gender == 'male'
}
)
console.log('isThereAtLeastOneMaleCharacter = ' + isThereAtLeastOneMaleCharacter)

//2. Mavi gözlü en az bir karakter var mı?
isThereAtLeastOneBlueEyedCharacter = characters.some(character => {
    return character.eye_color == 'blue'
})
console.log('isThereAtLeastOneBlueEyedCharacter = ' + isThereAtLeastOneBlueEyedCharacter)
//3. 210'dan uzun en az bir karakter var mı?
isThereAtLeastOneCharacterTallThan210 = characters.some(character => {
    return character.height > 210
})
console.log('isThereAtLeastOneCharacterTallThan210 = ' + isThereAtLeastOneCharacterTallThan210)

//4. Kütlesi 50'den az olan en az bir karakter var mı?
isThereAtLeastOneCharacterWeakThan50 = characters.some(character => {
    return character.mass < 50
}
)
console.log('isThereAtLeastOneCharacterWeakThan50 = ' + isThereAtLeastOneCharacterWeakThan50)