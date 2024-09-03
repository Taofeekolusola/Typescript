interface Human {
    name: string;
    blood: string;
    genotype: string;
    age: number;
    greet(): void
}

class Person implements Human {
    name: string;
    blood: string;
    genotype: string;
    age: number; 
    
    constructor (name: string, blood: string, genotype: string, age: number ) {
        this.name = name
        this.blood = blood
        this.genotype = genotype
        this.age = age
    }
    greet(): void {
        console.log(`My name is ${this.name}, I am ${this.age} years old, my blood group is ${this.blood} and my genotype is ${this.genotype}`)
    }
    sayHi(): void {
        console.log(`${this.name} says hi`)
    } 
}

let person = new Person('Taofeek Olusola', '0+', 'AS', 31)
person.greet()
person.sayHi()