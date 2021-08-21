import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../Components/Common/FormsControls/FormsControls";
import { required } from "../../Utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import  { Redirect } from "react-router-dom";
import style from "./Login.module.css";

const LoginForm = (props) => {
    return (
            <form onSubmit = {props.handleSubmit}>
                <div>
                    <Field placeholder = {"Email"} name = {"email"} component = {Input} validate = {[required]} />
                </div>
                <div>
                    <Field placeholder = {"Password"} name = {"password"} type = {"password"} component = {Input} validate = {[required]} />
                </div>
                <div>
                    <Field type = {"checkbox"} name = {"remeberMe"} component = {Input} /> remember me
                </div>
                { props.error && <div className = {style.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginRedaxForm =  reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.remeberMe);
    }

    if(props.isAuth){
        return <Redirect to = {"/profile"} />
    }

    return (
        <div>
            <h1>
                Login
            </h1>
            <LoginRedaxForm  onSubmit = {onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, { login })(Login);