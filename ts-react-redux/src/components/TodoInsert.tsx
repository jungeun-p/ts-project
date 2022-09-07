import React, { ChangeEvent, FormEvent, useState } from 'react';

type TodoInsertProps = {
    onInsert: (text:string) => void;
}

const TodoInsert = ({ onInsert }: TodoInsertProps) => {
    const [value, setValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setValue(value);
    };
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        onInsert(value);
        setValue('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
                placeholder="insert todo"
                value={value}
                onChange={onChange}
            />
            <button type="submit">submit</button>
        </form>
    );
};

export default TodoInsert;