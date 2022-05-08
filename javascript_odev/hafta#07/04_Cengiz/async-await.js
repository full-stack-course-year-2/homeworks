const students = require('./data');
const isStudentsListShown = true;

const studentsList = [];

function getTheDatas() {

    return new Promise((res, rej) => {

        setTimeout(() => {
            studentsList.push(students.filter((item) => item.graduated == true));

            if (isStudentsListShown) {
                res()
            } else {
                rej('Graduated students are not downloaded!!')
            }
        }, 5000);

    })
};

function showTheList() {

    setTimeout(() => {
        studentsList.forEach(item => {
            console.log(item);
        })
    }, 2000);

}

async function sortFlow() {
    await getTheDatas().catch((e) => {
        console.log(e);
    });

    showTheList();

}

sortFlow();
