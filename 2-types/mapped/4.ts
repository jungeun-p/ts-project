export {};

interface Person {
    name: string;
    age: number;
    language: string;
}

type Record<K extends string, T> = { [P in K]: T }; // K속성들로 이뤄진 인터페이스 생성 후 값은 제너릭 T
type T1 = Record<'p1' | 'p2', Person>; 
type T2 = Record<'jin'|'rm', boolean>;