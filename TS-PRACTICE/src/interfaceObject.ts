export {};

interface Person {
    name: string;
    age?: number;
}

// interface Developer { 
//     name: string; 
//     age?: number;
//     skills: string[];
// }

interface Developer extends Person {
    skills: string[];
}

const person: Person = {
    name: 'jin',
    age: 20
}

const expert: Developer = {
    name: 'rm',
    skills: ['javascript', 'react']
}

const people: Person[] = [
    person, expert
]