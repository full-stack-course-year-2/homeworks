function Auto(){
    return new Promise((resolve ,reject) =>{
        const test = true;
        setTimeout(() => {
            if(test){
                console.log("Elektirkli Auto schön");
                resolve();
            } else {
                reject("falsch")
            }
        }, 4000);
    })
}

function Auto1(){
    setTimeout(() => {
        console.log("Tesla gelecegin arabasi");
    }, 3000);
}

Auto()
.then((bilgi) =>{
    Auto1();
})