export {};

interface Person {
    name: string;
    age: number;
}

type MakeBoolean<T> = { [P in keyof T]?: boolean }; // 선택 속성
const pMap: MakeBoolean<Person> = {};

// Person type과 다르게 작성 가능
pMap.name = true;
pMap.age = false;

type T1 = Person['name']; // 인터페이스 속성 이름 작성 -> 속성 값의 타입
// type Readonly<T> = { readonly [P in keyof T]: T[P] }; // 속성에 readonly 추가 + 각 속성의 타입
// type Partial<T> = { [P in keyof T]?: T[P] }; // 모두 선택 속성으로 생성
type T2 = Partial<Person>;
type T3 = Readonly<Person>;
