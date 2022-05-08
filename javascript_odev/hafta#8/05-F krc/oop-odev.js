class Nokta {
    constructor(x1, y1, x2, y2, x3, y3) {
      this.x1 = x1;
      this.x2 = x2;
      this.x3 = x3;
      this.y1 = y1;
      this.y2 = y2;
      this.y3 = y3;
    }
  }
  
  class Ucgen extends Nokta {
    constructor(x1, y1, x2, y2, x3, y3) {
      super(x1, y1, x2, y2, x3, y3);
    }
    cevreHesapla = function () {
      let cevre =
        Math.sqrt(
          Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2)
        ) +
        Math.sqrt(
          Math.pow(this.x2 - this.x3, 2) + Math.pow(this.y2 - this.y3, 2)
        ) +
        Math.sqrt(
          Math.pow(this.x3 - this.x1, 2) + Math.pow(this.y3 - this.y1, 2)
        );
      return cevre;
    };
  
    alanHesapla = function () {
      let u =
        (Math.sqrt(
          Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2)
        ) +
          Math.sqrt(
            Math.pow(this.x2 - this.x3, 2) + Math.pow(this.y2 - this.y3, 2)
          ) +
          Math.sqrt(
            Math.pow(this.x3 - this.x1, 2) + Math.pow(this.y3 - this.y1, 2)
          )) /
        2;
  
      let alan = Math.sqrt(
        u *
          (u -
            Math.sqrt(
              Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2)
            )) *
          (u -
            Math.sqrt(
              Math.pow(this.x2 - this.x3, 2) + Math.pow(this.y2 - this.y3, 2)
            )) *
          (u -
            Math.sqrt(
              Math.pow(this.x3 - this.x1, 2) + Math.pow(this.y3 - this.y1, 2)
            ))
      );
      return alan;
    };
  }
  
  const ucgen = new Ucgen(0, 0, 0, 10, 10, 0);
  console.log(`Bu Ucgenin Cevresi=` + ucgen.cevreHesapla());
  console.log(`Bu Ucgenin Alani=` + ucgen.alanHesapla());