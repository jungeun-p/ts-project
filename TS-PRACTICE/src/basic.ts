let count = 0;
count += 1;
// count = 'string'; // error

const message: string = 'hello word';
const done: boolean = true;
const numbers: number[] = [1, 2, 3];
const messages: string[] = ['1', '2', '3'];

// message.push(1); // error

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: 'red' | 'blue' | 'orange' = 'red';
color: 'blue';
// color: 'green'; // error