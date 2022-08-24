export {};

abstract class Person {
    constructor(
        public name: string,
    ){}
    sayHello() {
        console.log(`hi, i'm ${this.name}`)
    }
    abstract sayHello2(): void;
}

class Programmer extends Person {
    sayHello(){
        super.sayHello();
    }
    sayHello2(){
        console.log('hi im Programmer');
    }
}

const person = new Programmer("jin");
person.sayHello();