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