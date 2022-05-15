class Nokta {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

const nokta1 = new Nokta (1, 1);
const nokta2 = new Nokta (5, 1);
const nokta3 = new Nokta (5, 4);

class Ucgen {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    kenarlar = [];

    cevreHesapla = () => {
        const ilkKenarlar = [];
     ilkKenarlar.push(
         Math.sqrt(
             Math.pow(this.a.x - this.b.x, 2) + Math.pow(this.a.y - this.b.y, 2)
        )
    );
     ilkKenarlar.push(
         Math.sqrt(
             Math.pow(this.a.x - this.c.x, 2) + Math.pow(this.a.y - this.c.y, 2)
        )
    );
     ilkKenarlar.push(
         Math.sqrt(
             Math.pow(this.b.x - this.c.x, 2) + Math.pow(this.b.y - this.c.y, 2)
        )
    );

     this.kenarlar = ilkKenarlar;       
     return ilkKenarlar.reduce((acc, item) => (acc += item), 0);
    };

    alanHesapla = () => {
        const t = this.cevreHesapla() /2;
        const sonuc = Math.sqrt(
            t*(t - this.kenarlar[0])*(t - this.kenarlar[1])*(t - this.kenarlar[2])
        )
       return sonuc;

    }

}


const ucgen = new Ucgen (nokta1, nokta2, nokta3)