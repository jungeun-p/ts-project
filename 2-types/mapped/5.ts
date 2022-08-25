export {};

enum Fruit {
    Apple,
    Banana,
    Orange,
    Kiwi,
}

// type Price<T> = { [key in keyof T]: number };
type Price = { [key in Fruit]: number };

const FRUIT_PRICE: Price = {
    [Fruit.Apple]: 1000,
    [Fruit.Banana]: 1000,
    [Fruit.Orange]: 2000,
    [Fruit.Kiwi]: 3000,
}