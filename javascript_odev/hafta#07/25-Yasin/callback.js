const graduatingInfomation = [
    {name: "John", degree: "3.04", years: "2011-2014" },
    {name: "Marry", degree: "2.05", years: "2007-2011" },
    {name: "Lucy", degree: "3.82", years: "2001-2005" },
    {name: "Hans", degree: "3.01" , years: "2018-2022"}
];




function myDiploma (diploma, callback) {
    setTimeout(() => {
     console.log(diploma);
    callback(graduatingInfomation) 
    }, 2000);
};


function diplomaInformation (gi){
    setTimeout(() => {
     console.log(gi) 
     
    }, 1000);
};


myDiploma ("Diploma Bilgileri Yayimlandi", diplomaInformation);