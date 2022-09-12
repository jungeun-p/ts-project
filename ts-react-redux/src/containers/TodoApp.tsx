import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import { RootState } from '../modules';
import { Action as TodoActions  } from '../modules/todos';

const TodoApp = () => {
    const todos = useSelector((state: RootState) => state.Todos);
    const dispatch = useDispatch();

    const onInsert = (text: string) => {
        dispatch(TodoActions.addTodo(text));
    }

    const onToggle = (id: number) => {
        dispatch(TodoActions.toggleTodo(id));
    }

    const onRemove = (id: number) => {
        dispatch(TodoActions.removeTodo(id));
    }

    return (
        <div>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />            
        </div>
    );
};

export default TodoApp;