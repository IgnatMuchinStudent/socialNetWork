import {getAuthUserData} from "./auth-reducer";
import {BaseThunkType, inferActionsType} from "./redux-store";
import {stopSubmit} from "redux-form";




type InitialStateType = typeof initialState;


let initialState= {
    initialized: false
};

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "social-network/app/INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}



export const actions = {
    initializedSuccess: () => ({type: 'social-network/app/INITIALIZED_SUCCESS'} as const)
}


export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(actions.initializedSuccess());
        });
}


export default appReducer;
type ThunkType = BaseThunkType<ActionsType>
type ActionsType = inferActionsType<typeof actions>