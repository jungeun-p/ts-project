import { ActionType, createAction, createReducer } from "typesafe-actions";

export {};
// as const
// action.type을 추론하는 과정에서 string이 아닌 'counter/~'로 추론 처리
// const INCREASE = 'counter/INCREASE' as const;
// const DECREASE = 'counter/DECREASE' as const;
// const INCREASE_BY = 'counter/INCREASE_BY' as const;

// typesafe
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// action 함수
// export const increase = () =>({ type: INCREASE })
// export const decrease = () => ({ type: DECREASE })
// export const increaseBy = (diff: number) => ({
//     type: INCREASE_BY,
//     payload: diff
// })

// typesafe
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>(); // payload를 generics 설정

// 액션 객체들의 타입 정의 
// ReturnType<typeof ___>
// 특정 함수 반환값을 추론. 액션타입 선언시 as const 필수. 
// type CounterAction = 
//     | ReturnType<typeof increase>
//     | ReturnType<typeof decrease>
//     | ReturnType<typeof increaseBy>;

// typesafe
const actions = { increase, decrease, increaseBy };
// Actiontype을 통해 액션 객체들의 타입 생성
type CounterAction = ActionType<typeof actions>;

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
// function Counter(
//     state: CounterState = initialState,
//     action: CounterAction
// ): CounterState {
//     switch(action.type){
//         case INCREASE:
//             return { count: state.count + 1 };
//         case DECREASE:
//             return { count: state.count - 1 };
//         case INCREASE_BY:
//             return { count: state.count + action.payload };
//         default:
//             return state;
//     }
// }

// typesafe
// Generics으로 관리할 상태, 리듀서에서 처리할 액션 객체들의 타입을 삽입
const Counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: state => ({ count: state.count + 1 }),
    [DECREASE]: state => ({ count: state.count - 1 }),
    [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload })
})

export default Counter;