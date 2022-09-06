"use strict";
// 일반 함수
function sum(x, y) {
    return x + y;
}
// sum(1, '4'); // error
sum(3, 4);
// 내장 함수 사용
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
// return type이 없을 때
function returnNothing() {
    console.log('I am just saying hello world');
}
