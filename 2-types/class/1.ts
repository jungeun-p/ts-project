export {};

class Person {
    constructor(
        public name: string,
        public age: number = 0,
    ){}
    sayHello(){
        console.log(`hi, ${this.name}`);
    }
}

class Programmer extends Person {
    fixBug(){
        console.log("fix bug")
    }
}

const programmer = new Programmer('jin', 14);

programmer.fixBug();
programmer.sayHello();