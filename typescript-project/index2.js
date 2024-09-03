"use strict";
class Phone {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        console.log(`A ${this.name} model ${this.model} year ${this.year}`);
    }
    camera(sharpness) {
        console.log(` with ${sharpness}PX camera`);
    }
}
class Iphone extends Phone {
    ring() {
        console.log('ton ton ton ton ton ton ton ton ton ton ton ton ton');
    }
}
let phone = new Iphone('Iphone', '12promax', 2022);
phone.getInfo();
phone.camera(90);
phone.ring();
