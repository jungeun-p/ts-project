import { getUserProfileAsync, GET_USER_PROFILE } from "./actions";
import { call, put, takeEvery } from 'redux-saga/effects';
import { getUserProfile, GithubProfile } from "../../api/github";
import { AxiosError } from "axios";
import createAsyncSaga from "../../lib/createAsyncSaga";

// function* getUserProfileSaga(action: ReturnType<typeof getUserProfileAsync.request>){
//     try {
//         const userProfile: GithubProfile = yield call(getUserProfile, action.payload);
//         yield put(getUserProfileAsync.success(userProfile));
//     } catch (e) {
//         // cast error
//         const err = e as AxiosError;
//         yield put(getUserProfileAsync.failure(err));
//     }
// }

const getUserProfileSaga = createAsyncSaga(getUserProfileAsync, getUserProfile);

export function* githubSaga(){
    yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
