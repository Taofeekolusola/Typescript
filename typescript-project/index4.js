"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        console.log(`${this.name} move ${distance} meters`);
    }
}
class Cat extends Animal {
    makeSound() {
        console.log('meow');
    }
}
class Bird extends Animal {
    makeSound() {
        console.log('chirp');
    }
    move(distance) {
        console.log(`${this.name} flew ${distance} meters`);
    }
}
let mycat = new Cat('Riro');
mycat.makeSound();
mycat.move(10);
let mybird = new Bird('Hawk');
mybird.move(20);
