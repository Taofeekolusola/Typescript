class Phone {
    name: string;
    model: string | number;
    year: number;

    constructor(name: string, model: string | number, year: number) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
        getInfo() {
            console.log(`A ${this.name} model ${this.model} year ${this.year}`);
        }

        camera(sharpness: number | string) {
            console.log(` with ${sharpness}PX camera`)
        }
}

class Iphone extends Phone {
    ring(): void {
        console.log('ton ton ton ton ton ton ton ton ton ton ton ton ton')
    }
}

let phone = new Iphone('Iphone', '12promax', 2022);
phone.getInfo()
phone.camera(90)
phone.ring()