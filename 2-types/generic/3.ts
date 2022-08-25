export {};

// generic
function makeArray<T>(defaultvalue: T, size: number): T[] {
    const arr: T[] = [];
    for(let i = 0; i < size; i++){
        arr.push(defaultvalue);
    }
    return arr;
}

const arr1 = makeArray<number>(1, 10);
const arr2 = makeArray<string>('empty', 10);
console.log(arr1, arr2); 