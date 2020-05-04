import React from "react"
import { Field, reduxForm } from 'redux-form'

 const LoginForm=({handleSubmit })=>{
    return(<form onSubmit={handleSubmit }>
        <div>
        <Field name="Login" component="input" type="text" placeholder="Login" />
        </div>
        <div>
        <Field name="Password" component="input" type="password" placeholder="Password"/>
        </div>
        <div>
        <Field name="RememberMe" component="input" type="checkbox" placeholder="Remember me"/>Remember me
        </div>
        <div>
           <button > Login</button>
        </div>
    </form>)
}
const LoginFormRedux = reduxForm ({
    form: 'login'
  })(LoginForm)
  export default LoginFormRedux