// instacne

export {};

class Person {
    name: string;
    age: number;
    constructor(
        name: string,
        age: number
    ){}
}

class Product {
    name: string;
    price: number;
    constructor(
        name: string,
        price: number,
    ){}
}

function print(value: Person | Product) {
    console.log(value.name);
    if(value instanceof Person){
        console.log(value.age);
    } else {
        console.log(value.price);
    }
}

const person1 = new Person('jin', 20);
console.log(print(person1));