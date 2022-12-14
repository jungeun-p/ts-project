import React from 'react';

type CounterProps = {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onIncreaseBy: (diff: number) => void;
}

const Counter = ({
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy
}: CounterProps) => {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <button onClick={() => onIncreaseBy(5)}>+5</button>
        </div>
    );
};

export default Counter;