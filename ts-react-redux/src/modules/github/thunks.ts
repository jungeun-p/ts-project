import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { getUserProfile } from "../../api/github";
import { getUserProfileAsync } from "./actions";
import { GithubAction } from "./types";

export function getUserProfileThunk(username: string): ThunkAction<
    void, // thunk 함수 반환 타입
    RootState, // store 상태 
    null, // redux-thunk 미들웨어 extra argument 타입
    GithubAction // dispatch 할 수 있는 액션
> {
    return async dispatch => {
        const { request, success, failure } = getUserProfileAsync;
        // dispatch(request());
        try {
            const userProfile = await getUserProfile(username);
            console.log(userProfile);
            dispatch(success(userProfile));
        } catch (e) {
            // dispatch(failure(e));
            console.log(e);
        }

    }
}