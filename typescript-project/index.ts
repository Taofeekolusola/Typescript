let age: number = 12;
console.log(age);

let myVar: number | string | boolean = true;
console.log(myVar);

function greet(name: string, age: number) {
    return `my name is ${name} and i am ${age} years old`
}

let personage: number = 30;
let personName: string = 'Taofeek';
console.log(greet(personName, personage));

let myArray: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < 5; i++) {
    console.log(myArray[i]);
}

function greets(name: string, greeting: string = 'Hello'): string {
    return `${greeting} ${name}`
}

console.log(greets('Taofeek'))

const sumAll = (...number: number[]): number => {
    return number.reduce((sum, current) => sum + current)
}

console.log(sumAll(1,2,3,4,5))

function getInfo(info: number | string) {
    if (typeof info === 'string') {
        return `Name: ${info}`
    } else {
        return `ID ${info}`
    }
}

console.log(getInfo('Taofeek'))
console.log(getInfo('31'))