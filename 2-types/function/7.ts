export {};

// overloading
function add(v1: string, v2: string):string;
function add(v1: number, v2: number):number;
function add(v1: string | number, v2:string | number): string | number{
    if(typeof v1 === 'number' && typeof v2 === 'number'){
        return v1 + v2;
    } else {
        const result = Number(v1) + Number(v2);
        return result.toString();
    }
}

const v1: number = add(1, 2);
console.log(add(1, '2'));