import {APIResponseType, instance} from "./api";
type GetCapctchaUrl = {
    url:string
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCapctchaUrl>(`security/get-captcha-url`).then(res=>res.data)
    }
}