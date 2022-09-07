import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import { RootState } from '../modules';
import { Action as TodoAction } from '../modules/todos';

const TodoApp = () => {
    const todos = useSelector((state: RootState) => state.Todos);
    const dispatch = useDispatch();

    const onInsert = (text: string) => {
        dispatch(TodoAction.addTodo(text));
    }

    const onToggle = (id: number) => {
        dispatch(TodoAction.toggleTodo(id));
    }

    const onRemove = (id: number) => {
        dispatch(TodoAction.removeTodo(id));
    }

    return (
        <div>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />            
        </div>
    );
};

export default TodoApp;