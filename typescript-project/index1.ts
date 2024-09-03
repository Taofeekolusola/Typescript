
class Dog {
    public name: string
    private _id: number

    constructor(name: string, id: number) {
        this.name = name
        this._id = id
    }

    public showId(): void {
        console.log(`${this._id}`)
    }
}

const myDog = new Dog('Buddy', 123)
myDog.showId() // Output: 123
console.log(myDog.name)