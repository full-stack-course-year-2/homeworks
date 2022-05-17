class Nokt  {
    constructor (x= 0, y =0) {
        this.x = x;
        this.y = y;
    }
};

const pi = 3.15;

const dNokta1 = new Nokt (1, 1);
const dNokta2 = new Nokt (5, 1);

class Daire {
    constructor(A, B) {
        this.A = A;
        this.B = B;
    };

    r = 0;              // 4

    yaricapHesapla () {
        const s = Math.sqrt(
            Math.pow(this.A.x - this.B.x, 2) + Math.pow(this.A.x - this.B.y, 2)
            )

        this.r = s
        return s
    } 

    cevreHesapla () {
        return  2*pi*this.r         //25,2
    }

    alanHesapla () {
        return 2*pi*Math.pow(this.r, 2);        //100.8
    }


}

const daireYaricap = new Daire (dNokta1, dNokta2);