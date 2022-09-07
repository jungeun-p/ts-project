export {};
// as const
// action.type을 추론하는 과정에서 string이 아닌 'counter/~'로 추론 처리
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// action 함수
export const increase = () =>({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })
export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    payload: diff
})

// 액션 객체들의 타입 정의 
//
// ReturnType<typeof ___>
// 특정 함수 반환값을 추론. 액션타입 선언시 as const 필수. 
type CounterAction = 
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>;

// 상태 타입
type CounterState = {
    count: number;
}

// 초기 상태 
const initialState: CounterState = {
    count: 0,
}

// reducer
// state와 함수의 반환값이 동일하게 처리 
// action은 CounterAction을 사용
function Counter(
    state: CounterState = initialState,
    action: CounterAction
): CounterState {
    switch(action.type){
        case INCREASE:
            return { count: state.count + 1 };
        case DECREASE:
            return { count: state.count - 1 };
        case INCREASE_BY:
            return { count: state.count + action.payload };
        default:
            return state;
    }
}

export default Counter;