export {};

function makeNumberArray(defaultvalue: number, size: number): number[] {
    const arr: number[] = [];
    for(let i = 0; i < size; i++){
        arr.push(defaultvalue);
    }
    return arr;
}

function makeStringArray(defaultvalue: string, size: number): string[] {
    const arr: string[] = [];
    for(let i = 0; i < size; i++){
        arr.push(defaultvalue);
    }
    return arr;
}

const arr1 = makeNumberArray(1, 10);
const arr2 = makeStringArray('empty', 10);
console.log(arr1, arr2); 