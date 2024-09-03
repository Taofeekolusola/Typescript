"use strict";
class Person {
    constructor(name, blood, genotype, age) {
        this.name = name;
        this.blood = blood;
        this.genotype = genotype;
        this.age = age;
    }
    greet() {
        console.log(`My name is ${this.name}, I am ${this.age} years old, my blood group is ${this.blood} and my genotype is ${this.genotype}`);
    }
    sayHi() {
        console.log(`${this.name} says hi`);
    }
}
let person = new Person('Taofeek Olusola', '0+', 'AS', 31);
person.greet();
person.sayHi();
