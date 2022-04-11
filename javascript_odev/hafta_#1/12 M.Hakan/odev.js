console.log("1. ödev: 30 dan 0 a 2 ser azaltma")

var i=30;
for (i; i>=0 ;i=i-2){
    console.log("azalan i degeri:" + i)
}

console.log("2. ödev (1ç yöntem) : 0`dan 50`ye tek sayilar")

var i=1;
for (i ;i<=50; i=i+2){
    console.log("0'dan 50'ye tek sayılar :" + i)
}


console.log("2. ödev (2inci yöntem) : 0`dan 50`ye tek sayilar")

for (var i=0 ;i<=50; i++){
    if(i%2==1){
        console.log("0'dan 50'ye tek sayılar :" + i)
    }
}

