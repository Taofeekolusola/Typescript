"use strict";
class Shape {
    printArea() {
        console.log(`Area: ${this.getArea()}`);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
let circle = new Circle(5);
circle.printArea(); // "Area: 78.53981633974483"
let rectangle = new Rectangle(10, 20);
rectangle.printArea(); // "Area: 200"
