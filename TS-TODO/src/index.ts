import { Command, CommandAddTodos, CommandPrintTodos } from "./Todos/Command";
import { waitForInput } from "./Input";
import Todo from "./Todos/Todo";
import { AppState, Priority } from "./Todos/type";

// command list
const commands: Command[] = [
    new CommandPrintTodos(),
    new CommandAddTodos()
]

async function main(){
    const state: AppState = {
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
            await command.run(state);
        } 
    }
}
main();