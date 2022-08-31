export {};

// discriminated union
interface Person {
    type: 'a'; // union type
    name: string;
    age: number;
}

interface Product {
    type: 'b'; // union type
    name: string;
    price: number;
}

interface Product2 {
    type: 'c';
    name: string;
    price2: number;
}

// if else
function print(value: Person | Product) {
    if(value.type ==='a'){
        console.log(value.age);
    } else {
        console.log(value.price);
    }
}

// switch
function pritn1(value: Person | Product | Product2) {
    switch(value.type) {
        case 'a':
            console.log(value.age);
            break;
        case 'b':
            console.log(value.price);
            break;
        case 'c':
            console.log(value.price2);
            break;
    }
}