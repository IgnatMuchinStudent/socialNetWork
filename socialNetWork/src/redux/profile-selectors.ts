
import { AppStateType } from "./redux-store";

export const getProfileSelector = (state: AppStateType) => {
    return   state.profilePage.profile;
}

export const getStatusSelector = (state: AppStateType) => {
    return state.profilePage.status;
}

export const getisAuth = (state: AppStateType) => {
    return  state.auth.isAuth;
}
export const getAuthorizedId = (state: AppStateType) => {
    return state.auth.userId;
}
