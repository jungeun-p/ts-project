import { AxiosError } from "axios";
import { Server, ServerResponse } from "http";
import { call, put } from "redux-saga/effects";
import { AsyncActionCreatorBuilder, PayloadAction } from "typesafe-actions";
import { GithubProfile } from "../api/github";

/**
 * 함수의 파라미터는 하나의 값을 사용
 * action.payload를 그대로 파라미터에 넣어준다. 
 * 여러가지 종류의 값을 넣어야 할 경우, 객체 형태로 생성
 * 
 */
type PromiseCreatorFunction<P, T> = ((payload: P) => Promise<T>) | (() => Promise<T>);

/**
 * payload를 가지고 있는지 action 확인
 */
function isPayloadAction<P>(action: any): action is PayloadAction<string, P> {
    return action.payload !== undefined;
}

export default function createAsyncSaga<T1, P1, T2, P2, T3, P3>(
    asyncActionCreator: AsyncActionCreatorBuilder<
    [T1, string], 
    [T2, GithubProfile], 
    [T3, AxiosError]
    >,
    promiseCreator: PromiseCreatorFunction<P1, P2>
) {
    return function* saga(action: ReturnType<typeof asyncActionCreator.request>){
        try {
            // action payload 확인
            const result: GithubProfile = isPayloadAction<P1>(action)
            ? yield call(promiseCreator, action.payload)
            : yield call(promiseCreator);
          yield put(asyncActionCreator.success(result)); 
        } catch (error) {
            const err = error as AxiosError;
            yield put(asyncActionCreator.failure(err));
        }
    }
}