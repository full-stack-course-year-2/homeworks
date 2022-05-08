const auto = require("./data");

function autolist() {
    setTimeout(() => {
        auto.filter((item) => {
            item.model > 2020,
            console.log(item);
        })
    }, 3000);
    
}

function newsauto(pego,tesla , callback){
    setTimeout(() => {
        auto.push(pego, tesla)
        callback();
    }, 4000);
}

newsauto(
    {marke :"pego" , model:"sedan" , yil : 2017},
    {marke :"tesla" , model:"sedan" , yil : 2021},
    autolist
)

sonuc = auto.filter(item => item.model>2020),
console.log(sonuc);