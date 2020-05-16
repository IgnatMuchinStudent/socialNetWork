import {createSelector} from "reselect";
import { AppStateType } from "./redux-store";

export const getAppSelector = (state: AppStateType) => {
    return   state.app.initialized;
}

