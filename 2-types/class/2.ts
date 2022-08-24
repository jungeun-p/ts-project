export {};

class Person {
    constructor(
       protected name: string
    ){}
    sayHello() {
        console.log(`hi, I'm ${this.name}`)
    }
}

class Programmer extends Person {
    constructor(
        public name: string
    ){
        super(name);
    }
    // 자식 클래스 method override
    sayHello(){
        super.sayHello(); // 부모의 sayHello 호출 
        console.log(`i'm programmer`);
    }
}

const programmer = new Programmer('jin');
programmer.sayHello();