// function 타입 추론 

export{};

function func1(a: number|string = 'abc', b = 10) {
    return `${a}, ${b}`;
}
func1(1, 3);
const v1: number = func1('3', 1);

// 여러 개의 return
function func2(value: number){
    if(value < 10){
        return value;
    } else {
        return `${value} is too big`;
    }
}