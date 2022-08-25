// extends 예제

export{};

interface Person {
    name: string;
    age: number;
}

interface Korean extends Person {
    liveInSeoul: boolean;
}

// type T1 = keyof Person;
function swapProperty<T extends Person, K extends keyof Person>( // K = 'name' | 'age'
    p1: T,
    p2: T,
    key: K
): void {
    const temp = p1[key];
    p1[key] = p2[key];
    p2[key] = temp;
}; 

const p1: Korean = {
    liveInSeoul: false,
    age: 23,
    name: 'jin',
};
const p2: Korean = {
    liveInSeoul: false,
    age: 34,
    name: 'rm',
}

swapProperty(p1, p2, 'age');
console.log(p1, p2);