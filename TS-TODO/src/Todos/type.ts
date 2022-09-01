import Todo from "./Todo";

// todo priority type
export enum Priority {
    High,
    Medium,
    Low,
}
// App의 상태
export interface AppState {
    todos: Todo[];
}

// mapped type을 이용한 한글 맵핑
export const PRIORITY_NAME_MAP: {[ key in Priority ]: string } = {
    [Priority.High]: '높음',
    [Priority.Medium]: '중간',
    [Priority.Low]: '낮음',
}

// 상태 변경 객체 타입
export interface ActionNewTodo {
    type: 'newTodo'; // union type
    title: string;
    priority: Priority;
}

// 상태 변경 삭제 타입
export interface ActionDeleteTodo {
    type: 'deleteTodo';
    id: number;
}

// 추후에 생성되는 액션 union type
export type Action = ActionNewTodo | ActionDeleteTodo; 