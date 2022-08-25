export {};

// overload
function makeArray(defaultValue: number, size: number): number[];
function makeArray(defaultValue: string, size: number): string[];
function makeArray(
    defaultValue: number | string,
    size: number,
): Array<number | string> {
    const arr: Array<number | string> = [];
    for (let i = 0; i < size; i++){
        arr.push(defaultValue);
    }
    return arr; 
}

