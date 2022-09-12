import { ActionType } from "typesafe-actions";
import { GithubProfile } from "../../api/github";
import * as actions from './actions';

// action type
export type GithubAction = ActionType<typeof actions>;

// github state type
export type GithubState = {
    userProfile: {
        loading: boolean;
        error: Error | null;
        data: GithubProfile | null;
    }
}