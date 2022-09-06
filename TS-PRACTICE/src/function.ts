// 일반 함수
function sum(x: number, y: number): number {
    return x + y; 
}

// sum(1, '4'); // error
sum (3, 4);

// 내장 함수 사용
function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

// return type이 없을 때
function returnNothing(): void {
    console.log('I am just saying hello world')
}
