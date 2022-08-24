export {};

function getText(name: string, age: number, language?: string): string {
    const nameText = name.substr(1, 10);
    const ageText = (age => 35) ? 'senior' : 'junior';
    const languageText = language ? language.substr(1, 10) : '';
    return `name: ${nameText}, age: ${ageText}, language: ${languageText}`;
}

const v1: string = getText('mike', 12, 'ko');