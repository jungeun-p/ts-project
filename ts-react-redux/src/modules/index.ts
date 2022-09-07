import { combineReducers } from "redux";
import Counter from './counter';
import Todos from './todos';

const rootReducer = combineReducers({
    Counter,
    Todos
});

export default rootReducer;

// rootReducer의 반환값 유추 
// 컨테이너 컴포넌트에 불러와서 사용
export type RootState = ReturnType<typeof rootReducer>;