class Point {
    constructor (x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

const point1 = new Point (4 , -7);
const point2 = new Point (8 , -7);
const point3 = new Point (8 , -3);
const point4 = new Point (4 , -3);



class SquareEdges {
    constructor (a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    };
    edges = [];
    
    squareCevresi  () {
        const firstEdge = [];
        firstEdge.push(Math.sqrt(
              Math.pow(this.a.x - this.b.x, 2) + Math.pow(this.a.y - this.b.y, 2)  
            )
        );

        firstEdge.push(Math.sqrt(
              Math.pow(this.a.x - this.d.x, 2) + Math.pow(this.a.y - this.d.y, 2)  
            )
        )
        firstEdge.push(Math.sqrt(
              Math.pow(this.b.x - this.c.x, 2) + Math.pow(this.b.y - this.c.y, 2)  
            )
        )
        firstEdge.push(Math.sqrt(
              Math.pow(this.c.x - this.d.x, 2) + Math.pow(this.d.y - this.d.y, 2)  
            )
        )
        this.edges = firstEdge;
        
      return firstEdge.reduce((acc, item) => (acc += item), 0);  
    };
    
    squareAlani () {
        const sqAlan = this.edges[0] * this.edges[1];
        return sqAlan
    }
};

const square = new SquareEdges (point1, point2, point3, point4)



