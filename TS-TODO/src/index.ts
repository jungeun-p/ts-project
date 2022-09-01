import { Command, CommandAddTodos, CommandDeleteTodo, CommandPrintTodos } from "./Todos/Command";
import { waitForInput } from "./Input";
import Todo from "./Todos/Todo";
import { Action, AppState, Priority } from "./Todos/type";
import { generateKey } from "crypto";

// command list
const commands: Command[] = [
    new CommandPrintTodos(),
    new CommandAddTodos(),
    new CommandDeleteTodo(),
]

async function main(){
    let state: AppState = {
        todos: [
            new Todo('test1', Priority.High),
            new Todo('test1', Priority.Medium),
            new Todo('test1', Priority.Low),
        ]
    }
    while(true){
        console.clear();
        // 1. command list 출력
        for(const command of commands) {
            console.log(command);
        }
        console.log('⬇️');
        // 3. key 입력, promise를 반환한다
        const key = await waitForInput('input command: ');
        console.clear();
        // 4. Print command 실행
        const command = commands.find(item => item.key === key);
        if(command){
            const action = await command.run(state);
            if(action){
                state = getNextState(state, action);
            }
        } 
    }
}
main();

// 현재 상태, 액션을 입력받은 후 다음 상태를 반환. 
function getNextState(state: AppState, action: Action): AppState {
    switch(action.type){
        case 'newTodo':
            return {
                ...state, 
                todos: [...state.todos, new Todo(action.title, action.priority)]
            }
        case 'deleteTodo':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id), // type 가드 적용
            }
    }
}