import { waitForInput } from "../Input";
import { getIsValidEnumValue } from "../util";
import { Action, ActionDeleteTodo, ActionNewTodo, AppState, Priority, PRIORITY_NAME_MAP } from "./type";

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
    abstract run(state: AppState): Promise<void | Action>;
}

// Print Todo List 
export class CommandPrintTodos extends Command {
    constructor(){
        // 부모 class의 생성자 함수 사용
        super('p', '모든 할 일 출력');
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
        super('n', '할 일 추가');
    }
    // todo 추가 메서드 
    // state에 추가할 action 객체를 생성
    async run(): Promise<void | ActionNewTodo> {
        console.log('할 일을 추가해주세요');
        const title = await waitForInput('title: ');
        // priority 높음(0) ~ 낮음(2)
        const priorityStr = await waitForInput(`priority ${PRIORITY_NAME_MAP[Priority.High]}(${Priority.High}) ~ ${PRIORITY_NAME_MAP[Priority.Low]}(${Priority.Low}): `);
        const priority = Number(priorityStr);
        // title, number priority가 충족했을 경우 실행
        if(title && CommandAddTodos.getIsPriority(priority)){
            return {
                type: 'newTodo',
                title,
                priority,
            }
        }
    }
    // priority validation method
    static getIsPriority(priority: number): priority is Priority {
        return getIsValidEnumValue(Priority, priority);
    }
}

export class CommandDeleteTodo extends Command {
    constructor(){
        super('d', '할 일 제거');
    }
    async run(state: AppState): Promise<void | ActionDeleteTodo> {
        // todo list 출력
        for (const todo of state.todos){
            const text = todo.toString();
            console.log(text);
        }
        const idStr = await waitForInput('press todo id to delete: ');
        const id = Number(idStr);
        return {
            type: 'deleteTodo',
            id,
        }
    }
}