import React from 'react';
import PropTypes from 'prop-types';

type GreetingProps = {
    name: string;
    mark: string;
    optional?: string;
    onClickName: (name: string) => void; 
}

const Greeting = ({ name, mark, optional, onClickName }: GreetingProps) => {
    const handleClick = () => onClickName(name);
    return (
        <div>
            hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click me</button>
            </div>
        </div>
    );
};

Greeting.defaultProps = {
    mark: '!'
};

export default Greeting;