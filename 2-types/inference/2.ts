// inteface에서의 타입 추론 

export {};
interface Person {
    name: string;
    age: number;
}

interface Korean extends Person {
    liveInSeoul: boolean;
}

interface Japanese extends Person {
    liveInTokyo: boolean;
}

const p1: Person = { name: 'mike', age: 23 };
const p2: Korean = { name: 'jin', age: 10, liveInSeoul: true };
const p3: Japanese = { name: 'mako', age: 30, liveInTokyo: true };

const arr1 = [p1, p2, p3]; // Person
const arr2 = [p2, p3]; // Korean | Japanese