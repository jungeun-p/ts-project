import React, { ChangeEvent, FormEvent, useState } from 'react';
import './GithubUsernameForm.css';

type GithubUsernameFormProps = {
    onSubmitUsername: (username: string) => void
}

const GithubUsernameForm = ({ onSubmitUsername }: GithubUsernameFormProps) => {
    const [input, setInput] = useState('');
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitUsername(input);
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }
    return (
        <form action="">
            <input onChange={onChange} value={input} placeholder="fill your github account" />
            <button type="submit">inquiry</button>
        </form>
    );
};

export default GithubUsernameForm;