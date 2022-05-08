class Points {

    constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0, x3 = 0, y3 = 0) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
    }
    
}

class Triangle extends Points {

    constructor(x1, y1, x2, y2, x3, y3, a = 0, b = 0, c = 0) {
        super(x1, y1, x2, y2, x3, y3);
        this.a = Math.sqrt(
            Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2)
        );
        this.b = Math.sqrt(
            Math.pow(this.x2 - this.x3, 2) + Math.pow(this.y2 - this.y3, 2)
        );
        this.c = Math.sqrt(
            Math.pow(this.x3 - this.x1, 2) + Math.pow(this.y3 - this.y1, 2)
        );

    }

    perimeterOfTriangle = function () {

        return this.a + this.b + this.c;
    }

    areaOfTriangle = function () {

        return Math.sqrt(this.perimeterOfTriangle() / 2 * (this.perimeterOfTriangle() / 2 - this.a) * (this.perimeterOfTriangle() / 2 - this.b) * (this.perimeterOfTriangle() / 2 - this.c))
    }

}

const triangle = new Triangle(1, 1, 5, 1, 5, 4);

console.log(triangle.perimeterOfTriangle());

console.log(triangle.areaOfTriangle());