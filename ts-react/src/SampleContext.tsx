import { createContext, Dispatch, useContext, useReducer } from "react";

export {};

type Color = 'red' | 'orange' | 'yellow';

type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
}

type Action = 
    | { type: 'SET_COUNT', count: number }
    | { type: 'SET_TEXT', text: string }
    | { type: 'SET_COLOR', color: Color }
    | { type: 'TOGGLE_GOOD' }

// Dispatch를 위한 type으로 액션들의 type을 dispatch의 generics로 설정 
type SampleDispatch = Dispatch<Action>;

// Context
// const SampleStateContext = createContext<State | null>(null);
const SampleStateContext = createContext<State>({ count:0, text: 'hello', color: 'red', isGood:true }); 
// const SampleDispatchContext = createContext<SampleDispatch | null>(null);
const SampleDispatchContext = createContext<SampleDispatch>(() => null); // null값 checking

// Reducer
function reducer(state: State, action: Action): State {
    switch(action.type){
        case 'SET_COUNT':
            return {
                ...state, 
                count: state.count += action.count
            }
        case 'SET_TEXT':
            return{
                ...state,
                text: action.text
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color
            }
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            }
    }
}

// Provider
export function SampleProvider({ children }: { children: React.ReactNode }){
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true
    });

    return (
        <SampleStateContext.Provider value={state}>
            <SampleDispatchContext.Provider value={dispatch}>
                {children}
            </SampleDispatchContext.Provider>
        </SampleStateContext.Provider>
    )
}

// state와 dispatch를 커스텀
export function useSampleState(): State {
    const state = useContext(SampleStateContext);
    if(!state) throw new Error('Cannot find SampleProvider');
    return state;
}

export function useSampleDispatch(): SampleDispatch { // return type 지정
    const dispatch = useContext(SampleDispatchContext);
    if(!dispatch) throw new Error('Cannot find SampleProvider');
    return dispatch;
}