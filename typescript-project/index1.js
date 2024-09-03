"use strict";
class Dog {
    constructor(name, id) {
        this.name = name;
        this._id = id;
    }
    showId() {
        console.log(`${this._id}`);
    }
}
const myDog = new Dog('Buddy', 123);
myDog.showId(); // Output: 123
console.log(myDog.name);
