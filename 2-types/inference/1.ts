export {};

let v1 = 123;
let v2 = 'abc';

v1 = 'a';
v2 = 4345;

const v3 = 123;
const v4 = 'abc';

let v5: typeof v3 = 123;

// 비구조화 할당 
const arr1 = [10, 20, 30];
const [n1, n2, n3] = arr1;
arr1.push('a');

const obj = { id: 'abcd', age: 123, language: 'ko' };
const { id, age, language } = obj;
console.log(id === age);