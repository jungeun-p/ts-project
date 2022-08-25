export {};

// type Pick<T, K extends keyof T> = { [P in K]: T[P] }; 
// 1. T인터페이스의 모든 속성 이름 나열 -> K에 할당 
// 2. K 속성들로 이뤄진 인터페이스 생성 -> 값은 원래 값을 사용

interface Person {
    name: string;
    age: number;
    language: string;
}

// 인터페이스에서 속성값 선택 
type T1 = Pick<Person, 'name' | 'age'>;