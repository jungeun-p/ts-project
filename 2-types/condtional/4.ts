export {};

type Unpacked<T> = T extends (infer U)[]
    ? U
    : T extends (...args: any[]) => infer U
    ? U
    : T extends Promise<infer U>
    ? U
    : T;

type T0 = Unpacked<string>;
type T1 = Unpacked<string[]>;
type T2 = Unpacked<()=>string>;
type T3 = Unpacked<Promise<string>>; // Promise의 값 => string 반환
type T4 = Unpacked<Promise<string>[]>; // Promise의 배열 => promise 반환
type T5 = Unpacked<Unpacked<Promise<string>[]>> // Promise의 배열의 promise => Promise의 값 string