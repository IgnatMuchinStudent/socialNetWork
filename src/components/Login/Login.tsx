import React from 'react';
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"
import s from "./Login.module.css";
import { AppStateType } from '../../redux/redux-store';
type IProps = {
    captchaUrl:string  | null
}
const LoginForm:React.FC<InjectedFormProps<LoginFormValues, IProps>&IProps> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
            {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"})}
            {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

            { captchaUrl && <img src={captchaUrl} />}
            { captchaUrl &&  createField("Symbols from image", "captcha", [required], Input, {}) }


            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValues, IProps>({form: 'login'})(LoginForm)
type MapStateToProps={
    captchaUrl:string | null,
    isAuth: boolean
}
type MapDispatchToProps = {
    login:(email:string, password:string, rememberMe:boolean, captcha:string)=>void
}
type LoginFormValues = {
    email:string, password:string, rememberMe:boolean, captcha:string
}
export type LoginFormValuesTypeKeys = Extract< keyof LoginFormValues,string>

const Login:React.FC<MapStateToProps & MapDispatchToProps > = (props) => {
    const onSubmit = (formData:LoginFormValues) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1 className={s.header}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state:AppStateType):MapStateToProps => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);