import { waitForInput } from "../Input";
import { AppState } from "./type";

// 추상 클래스 생성 후 이를 상속받아 구체적인 커맨드 생성
export abstract class Command {
    constructor(
        public key: string,
        private desc: string,
    ){}
    // 해당 Command에 대한 설명
    toString(){
        return `${this.key}: ${this.desc}`;
    }
    // key를 눌렀을 때 실행하는 추상 메서드
    abstract run(state: AppState): Promise<void>;
}

// Print Todo List 
export class CommandPrintTodos extends Command {
    constructor(){
        // 부모 class의 생성자 함수 사용
        super('P', '모든 할 일 출력');
    }
    async run(state: AppState): Promise<void> {
        // 모든 todo 출력
        for (const todo of state.todos){
            const text = todo.toString();
            console.log(text);
        }
        await waitForInput('press any key: ');
    }
}
// Add Todo List
export class CommandAddTodos extends Command {
    constructor(){
        super('R', '할 일 추가');
    }
    async run(state: AppState): Promise<void> {
        console.log('할 일을 추가해주세요');
        await waitForInput('press any key: ');
    }
}