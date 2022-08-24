export {};

class Person {
    private _name: string = '';
    get name(): string {
        console.log('getter called');
        return this._name;
    }

    set name(newName: string){
        if(newName.length>10){
            throw new Error(`최대 길이를 넘었습니다`);
        }
        this._name = newName;
    }
}

let person = new Person();
person.name = "jin"; // setter 호출
console.log(person.name); // getter 호출
person.name="asdgdlkgjsldkgj"; // error 메시지 확인
