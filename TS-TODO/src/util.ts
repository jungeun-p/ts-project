// 특정 value 검사
export function getIsValidEnumValue(enumObject: any, value: number | string) {
    return Object.keys(enumObject)
        .filter(key => isNaN(Number(key)))
        .some(key => enumObject[key] === value);
}