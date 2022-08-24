export {};

interface Person {
    readonly name: string;
    position?: string;
    age?: number;
    [key: string]: string | number; 
}

const p1: Person = { name: 'jin', position: 'singer', age: 20, birthday: '1992-12-04' };
const p2: Person = { name: 'rm', age: 19 };
const p3: Person = { name: 'suga' }