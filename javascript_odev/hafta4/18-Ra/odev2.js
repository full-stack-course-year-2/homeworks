const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// 1) Dizideki tüm insanların ortalama geliri nedir? (acc = accumulator = toplayıcı parametre)
totalSalary = people.reduce((acc, person) => {
    return acc + parseInt(person.salary)
}, 0)
averageSalary = totalSalary / people.length

console.log('averageSalary: ', averageSalary)


// 2) Şu anda 30 yaşından büyük kişiler kimlerdir?
peopleOlderThan30 = people.filter(person => {
    // find the age of the person from DOB
    age = new Date().getFullYear() - new Date(person.DOB).getFullYear()
    console.log(age)
    return age > 30
})

console.log('People Older Than 30')
console.log(peopleOlderThan30)


// 3) Kişilerin tam adının bir listesini alın (ad ve soyadı).
getFullNameList = people.map(person => {
    return person.firstName + ' ' + person.lastName
})
console.log('Full Name List')
console.log(getFullNameList)

// 4) Küçükten büyüğe doğru sıralanmış dizideki kişilerin bir listesini alın.
sortByDOB = people.sort((a, b) => {
    return new Date(a.DOB) - new Date(b.DOB)
})

console.log('Sort By DOB')
console.log(sortByDOB)



// 5) Her bölümde kaç kişi var? 
countByDepartment = people.reduce((acc, person) => {
    if (acc[person.department] == undefined) {
        acc[person.department] = 1
    } else {
        acc[person.department] += 1
    }
    return acc
}, {})

console.log('Count By Department')
console.log(countByDepartment)
