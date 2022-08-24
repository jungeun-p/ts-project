export {};

class Person {
    static adultAge = 20;
    constructor(
        public name: string,
        public age: number,
    ){}
    sayHello(){
        console.log(`hi, i'm ${this.name}`)
        console.log(Person.getIsAdult(this.age))
    }
    static getIsAdult(age: number){
        return Person.adultAge <= age;
    }
}

const person = new Person('hong', 19);
person.sayHello();
const person1 = new Person('hong1', 43);
person1.sayHello();