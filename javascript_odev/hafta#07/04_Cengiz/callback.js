let students = require('./data');

const studentsList = () => {
    setTimeout(() => {
        students = students.filter(item => {
            return item.graduated == true;
        });
        students.forEach(item => { console.log(item); })
    }, 2000);
}
function newStudent(student, next) {
    setTimeout(() => {
        students.push(student);
        next();
    }, 3000);
};

newStudent({ firstname: 'new student', lastname: 'new lastname', graduated: true }, studentsList,);
