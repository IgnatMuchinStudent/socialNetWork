import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import s from "../Dialogs.module.css"
import {LoginFormValuesTypeKeys} from "../../Login/Login";

const maxLength50 = maxLengthCreator(50);
export type MessageFormValuesTypeKeys = Extract< keyof New,string>
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.message}>
                {createField<LoginFormValuesTypeKeys>('Enter your message', "newMessageBody", [maxLength50], Textarea)}
            </div>
            <div>
                <button className={s.button}> Send </button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);

























