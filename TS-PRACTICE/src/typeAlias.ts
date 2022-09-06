export {};

type Person = {
    name: string;
    age?: number;
}

type Developer = Person & {
    skills: string[];
}

const person: Person = {
    name: 'jin',
    age: 12,
}
const developer: Developer = {
    name: 'rm',
    skills: ['ts', 'nest']
}

type People = Person[]; // Person 인스턴스로 구성된 배열
const people: People = [person, developer];

type Color = 'red' | 'blue' | 'orange';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];