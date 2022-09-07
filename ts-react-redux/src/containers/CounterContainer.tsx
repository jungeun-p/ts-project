import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { RootState } from '../modules';
import { decrease, increase, increaseBy } from '../modules/counter';

const CounterContainer = () => {
    // state 타입을 RootState로 처리
    const count = useSelector((state: RootState) => state.Counter.count);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    };
    const onDecrease = () => {
        dispatch(decrease());
    }
    const onIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff));
    }
    return (
        <Counter 
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
        />
    );
};

export default CounterContainer;