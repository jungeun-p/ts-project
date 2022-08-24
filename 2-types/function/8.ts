export {};

function getText({
    name,
    age = 15,
    language
}: {
    name: string,
    age?: number,
    language?: string,
}): string {
    const nameText = name.substr(0, 10);
    const ageText = (age >= 35) ? 'senior' : 'junior';
    return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}

getText({name: 'aaa', age: 11, language: ''});


// interface 분류
interface Param {
    name: string;
    age?: number;
    language?: string;
}

function getText2({ name, age = 15, language }: Param): string {
    return ``;
}

// refactoring 기능
function getText3({ name, age = 15, language }: { name: string; age?: number; language?: string; }): string {
    const nameText = name.substr(0, 10);
    const ageText = (age >= 35) ? 'senior' : 'junior';
    return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}
