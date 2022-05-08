class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  distanceTo(point) {
    return Math.sqrt(
      Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2)
    );
  }
}

class Triangle {
  constructor(point1, point2, point3) {
    this.p1 = point1;
    this.p2 = point2;
    this.p3 = point3;
    this.dA = point1.distanceTo(point2);
    this.dB = point2.distanceTo(point3);
    this.dC = point3.distanceTo(point1);
  }

  perimeter() {
    return this.dA + this.dB + this.dC;
  }

  area() {
    let s = this.perimeter() / 2;
    return Math.sqrt(s * (s - this.dA) * (s - this.dB) * (s - this.dC));
  }
}


let triangle = new Triangle(new Point(0, 0), new Point(0, 5), new Point(19, 5));

console.log("Area: " + triangle.area());
console.log("Perimeter: " + triangle.perimeter());
