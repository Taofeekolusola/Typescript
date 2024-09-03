abstract class Animal {
    name: string

    constructor(name: string){
        this.name = name
    }
    abstract makeSound(): void

    move(distance: number): void {
        console.log(`${this.name} move ${distance} meters`)
    }
} 

class Cat extends Animal {
    makeSound(): void{
        console.log('meow')
    }
}
class Bird extends Animal {
    makeSound(): void{
        console.log('chirp')
    }
    move(distance: number): void {
        console.log(`${this.name} flew ${distance} meters`)
    }
}

let mycat = new Cat('Riro')
mycat.makeSound()
mycat.move(10)

let mybird = new Bird('Hawk')
mybird.move(20)