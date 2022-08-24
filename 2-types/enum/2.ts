export {};

function getIsValidEnumValue(enumObject: any, value: number | string){
    return Object.keys(enumObject)
        .filter(key => isNaN(Number(key))) // 양방향 제거
        .some(key => enumObject[key] === value);
}
// enum Some {
//     key1 = 1,
// }

// Some['key1'] = 1;
// Some[1] = 'key1'; 

enum Fruit {
    Apple,
    Banana,
    Orange,
}

enum Language {
    Korean = 'ko',
    English = 'en',
    Japanese = 'jp',
}

// console.log(getIsValidEnumValue(Some, 1)) // true
// console.log(getIsValidEnumValue(Some, 'key1')); // false

console.log(getIsValidEnumValue(Fruit, 1));
console.log(getIsValidEnumValue(Fruit, 5));
console.log(getIsValidEnumValue(Fruit, 'Orange'));
console.log(getIsValidEnumValue(Language, 'ko'));
console.log(getIsValidEnumValue(Language, 'Korean'));