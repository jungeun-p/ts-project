// function with generics
function merge(a: any, b: any): any {
    return {
        ...a,
        ...b
    };
}

const merged = merge({foo: 1}, {bar: 1});

function mergeGeneric<A, B> (a: A, b: B): A & B {
    return {
        ...a,
        ...b
    }
}

const mergedGeneric = mergeGeneric({foo: 1}, {bar: 1});

function wrap<T>(param: T){
    return {
        param
    }
}

const wrapped = wrap(10);

// Interface with generics
interface Items<T>{
    list: T[];
}

const items: Items<string> = {
    list: ['a', 'b', 'c']
}

// Type with generics
type Items1<T> = {
    list: T[];
}

const items1: Items1<number> = {
    list: [1, 2, 3],
}

// Class with generics
class Queue<T> {
    list: T[] = [];
    get length() {
        return this.list.length;
    }
    // 등록
    enqueue(item: T) {
        this.list.push(item);
    }
    // 항목 뽑기
    dequeue(){
        return this.list.shift();
    }
}

const queue = new Queue<number>();

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
console.log(queue.length);