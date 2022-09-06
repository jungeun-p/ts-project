interface Shape {
    // 반환값이 숫자인 추상 메소드 -> 인스턴스가 반드시 생성해야 하는 메서드
    getArea(): number;
}

class Circle implements Shape {
    constructor(
        public radius: number,
    ){}
    getArea(){
        return this.radius * this.radius * Math.PI;        
    }
}

class Ractangle implements Shape {
    constructor(
        public height: number,
        public width: number,
    ){}
    getArea(){
        return this.height * this.width; 
    }
}

const shpaes: Shape[] = [
    new Circle(5),
    new Ractangle(2, 6)
];

shpaes.forEach(shape => {
    console.log(shape.getArea());
})