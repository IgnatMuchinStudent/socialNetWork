import React from "react";
import s from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b> name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>About me</b>:
            { createField("About me", "aboutMe", [], Textarea  )}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;