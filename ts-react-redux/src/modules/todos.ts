export {};

// 액션 타입
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

let nextId = 1;

// 액션 함수
export const Action = {
    addTodo: (text: string) => ({ type: ADD_TODO, payload: { id: nextId++, text } }),
    toggleTodo: (id: number) => ({ type: TOGGLE_TODO, payload: id }),
    removeTodo: (id: number) => ({ type: REMOVE_TODO, payload: id }),
}

type TodosAction = 
    | ReturnType<typeof Action.addTodo>
    | ReturnType<typeof Action.toggleTodo>
    | ReturnType<typeof Action.removeTodo>;

// todos 상태 타입 정의
export type Todo = {
    id: number,
    text: string,
    done: boolean,
}

// 해당 모듈에서 관리할 상태
export type TodosState = Todo[];

const initialState: TodosState = [];

function Todos(
    state: TodosState = initialState,
    action: TodosAction
): TodosState {
    switch(action.type){
        case ADD_TODO:
            return state.concat({
                id: action.payload.id,
                text: action.payload.text,
                done: false
            });
        case TOGGLE_TODO:
            return state.map(todo => 
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            );
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}

export default Todos;