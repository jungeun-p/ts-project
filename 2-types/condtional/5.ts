// utility type

export {};

// 값이 문자열인 속성 이름을 추출하는 type
type StringPropertyNames<T> = {
    [K in keyof T]: T[K] extends string ? K : never; 
}[keyof T]; // 속성값의 type

interface Person {
    name: string;
    age: number;
    nation: string;
}

type T1 = StringPropertyNames<Person>;

// interface Person2 {
//     name: 'name';
//     age: never;
//     nation: 'nation';
// }

// type T3 = Person2['name' | 'nation']; // name 속성값의 type

type StringProperties<T> = Pick<T, StringPropertyNames<T>>; // Pick<T, 'name'|'nation'>
type T2 = StringProperties<Person>; // string만 모아 놓은 객체 타입 생성