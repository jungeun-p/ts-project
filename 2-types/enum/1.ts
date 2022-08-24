export {};

enum Fruit {
    Apple,
    Banana = 5,
    Orange,
}
console.log(Fruit.Apple, Fruit.Banana, Fruit.Orange);

const v1: Fruit = Fruit.Apple;
const v2: Fruit.Apple | Fruit.Banana = Fruit.Banana;

console.log(Fruit.Banana); 
console.log(Fruit['Banana']); // 객체의 속성값
console.log(Fruit[5]); // 