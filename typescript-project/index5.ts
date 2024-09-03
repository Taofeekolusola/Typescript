abstract class Shape {
    abstract getArea(): number;

    printArea(): void {
        console.log(`Area: ${this.getArea()}`);
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

let circle = new Circle(5);
circle.printArea(); // "Area: 78.53981633974483"

let rectangle = new Rectangle(10, 20);
rectangle.printArea(); // "Area: 200"