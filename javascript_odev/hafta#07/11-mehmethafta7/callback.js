const students =  require('./data');

function studentsList () {
    setTimeout(() => {
        students.filter((item)=>{item.gpa>4.0,
            console.log(item);
         })
    }, 2000);
    }
 
function newstudent(news,mari,callback){
   setTimeout(() => {
    students.push(news,mari);
     callback();
   },3000);
}
newstudent(
    {firstname:'selvi', lastname:'tugba' ,gpa:4.41},
    {firstname:'gulsen', lastname:'duru' ,gpa:4.45},
     studentsList
    );



    result = students.filter(item=>item.gpa >4.0),
    console.log(result);

 



    



