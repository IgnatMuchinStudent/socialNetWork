import axios from "axios";
import {UserType} from "../types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "805fc629-bd4f-400b-b9bd-106cc3d4ec2a"
    }
});


export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCapctha {
    CaptchaIsRequired = 10
}
export type GetItemsType = {
items: Array<UserType>,
    totalCount:number,
    error: string |null
}



export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D,
    message: Array<string>,
    resultCode: RC

}