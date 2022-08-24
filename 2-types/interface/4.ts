export {};

interface Person {
    name: string;
    age: number;
    isYoungerThan(age: number): boolean;
}

class Singer implements Person {
    name: string;
    age: number;
    constructor(
        name: string,
        age: number,
    ){}
    isYoungerThan(age: number){
        return this.age < age;
    }
}

interface Programmer {
    favLan: string;
}

interface Korean extends Person, Programmer {
    isLiveInSeoul: boolean;
}

// 교차 타입 
type PP = Person & Programmer; 