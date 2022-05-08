class Nokta{
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
}

const nokta_1 = new Nokta(1,1);
const nokta_2 = new Nokta(5,1);
const nokta_3 = new Nokta(5,4);

class Ucgen{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    kenarlar = [];
    cevreHesapla = () => {
        const temp = []
       temp.push(
        Math.sqrt(
            Math.pow(this.b.x - this.a.x,2) +  Math.pow(this.b.y - this.a.y,2)
            )
       );

       temp.push(
        Math.sqrt(
            Math.pow(this.b.x - this.c.x,2) +  Math.pow(this.b.y - this.c.y,2)
            )
       );
        
       temp.push(
        Math.sqrt(
            Math.pow(this.c.x - this.a.x,2) +  Math.pow(this.c.y - this.a.y,2)
            )
       );
       this.kenarlar = temp;
       return temp.reduce((acc, item) => acc += item, 0)
    };
    alanHesapla = () => {
        const s = this.cevreHesapla() / 2;
        return  Math.sqrt(
         s * 
            (s - this.kenarlar[0])*
            (s - this.kenarlar[1])*
            (s - this.kenarlar[2])
            );
            
    };
}

const ucgen= new Ucgen(nokta_1,nokta_2, nokta_3);

console.log(ucgen.cevreHesapla())
console.log(ucgen.alanHesapla())