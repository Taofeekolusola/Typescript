"use strict";
let age = 12;
console.log(age);
let myVar = true;
console.log(myVar);
function greet(name, age) {
    return `my name is ${name} and i am ${age} years old`;
}
let personage = 30;
let personName = 'Taofeek';
console.log(greet(personName, personage));
let myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < 5; i++) {
    console.log(myArray[i]);
}
function greets(name, greeting = 'Hello') {
    return `${greeting} ${name}`;
}
console.log(greets('Taofeek'));
const sumAll = (...number) => {
    return number.reduce((sum, current) => sum + current);
};
console.log(sumAll(1, 2, 3, 4, 5));
function getInfo(info) {
    if (typeof info === 'string') {
        return `Name: ${info}`;
    }
    else {
        return `ID ${info}`;
    }
}
console.log(getInfo('Taofeek'));
console.log(getInfo('31'));
