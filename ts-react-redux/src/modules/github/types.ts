import { ActionType } from "typesafe-actions";
import { GithubProfile } from "../../api/github";
// import {getUserProfile, getUserProfileError, getUserProfileSuccess, } from './actions';
import * as actions from './actions';

// action type
export type GithubAction = ActionType<typeof actions>;
    // | ActionType<typeof getUserProfile>
    // | ActionType<typeof getUserProfileSuccess>
    // | ActionType<typeof getUserProfileError>;

// github state type
export type GithubState = {
    userProfile: {
        loading: boolean;
        error: Error | null;
        data: GithubProfile | null;
    }
}