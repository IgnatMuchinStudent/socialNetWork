import {ResultCodeForCapctha, ResultCodesEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";
import {BaseThunkType, inferActionsType} from "./redux-store";
import {Action} from "redux";

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'social-network/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null// if null, then captcha is not required
};

export type InitialStateType = typeof initialState;
type ActionsType = inferActionsType<typeof actions>

const authReducer = (state = initialState, action: ActionsType ): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


const actions = {
  setAuthUserData :(userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: SET_USER_DATA, payload:
            {userId, email, login, isAuth}
    }as const),
    getCaptchaUrlSuccess : (captchaUrl: string) => ({
        type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
    } as const)
}



type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>



export const getAuthUserData = ():ThunkType => async (dispatch) => {
    let meData = await authAPI.me();

    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string):ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodesEnum.Success) {
        // success, get auth data
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodeForCapctha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
let message = data.message.length>0? data.message[0]: "Some Error"
        dispatch(stopSubmit("Login",{_error:message}))
    }
}

export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}



export const logout = ():ThunkType => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
