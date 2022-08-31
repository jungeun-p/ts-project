export {};

// T extends U ? X : Y

type IsStringType<T> = T extends string ? 'yes' : 'no';
type T1 = IsStringType<string>;
type T2 = IsStringType<number>;

// union type
type T3 = IsStringType<string | number>;
type T4 = IsStringType<string> | IsStringType<number>;

// generic
type Array2<T> = Array<T>;
type T5= Array2<string|number>;
