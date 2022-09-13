import { combineReducers } from "redux";
import Counter from './counter';
import Todos from './todos';
import Github from './github/reducer';
import { githubSaga } from './github';
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
    Counter,
    Todos,
    Github
});

export default rootReducer;

// rootReducer의 반환값 유추 
// 컨테이너 컴포넌트에 불러와서 사용
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
    yield all([githubSaga()]);
  }