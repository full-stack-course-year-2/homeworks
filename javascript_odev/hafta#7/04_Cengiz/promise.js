let students = require('./data');
const isStudentsListShown = true;

const studentsList = () => {
  setTimeout(() => {
    students = students.filter(item => {
      return item.graduated == true;
    })
    students.forEach(item => {
      console.log(item);
    })
  }, 2000);
}

function newStudent(student) {

  return new Promise((res, rej) => {

    setTimeout(() => {
      students.push(student);
      if (isStudentsListShown) {
        res()
      } else {
        rej('Students list is not shown!!')
      }
    }, 3000);

  })
};

newStudent({ firstname: 'new student', lastname: 'new lastname', graduated: true }).
  then(() => {
    studentsList();
  }).
  catch((e) => {
    console.error(e);
  });