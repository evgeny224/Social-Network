import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";


    

const Dialogs = (props) => {


    let DialogsElements = props.state.DialogsData.map( element => <DialogItem id={element.id}  name={element.name} key = {element.id} picture={element.picture}/>);
    
    let DialogsMessages = props.state.MessageData.map( element => <Message message={element.message} key = {element.id}/>)


    const addNewMessage = (value) => {
        props.addMessage(value.newMessageBody)
    }

//Редеректим если пользователь не залогинен
    if(!props.isAuth) return <Redirect to = {'/login'} />;

    return(

        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                    {DialogsElements}
            </div>
            <div className={style.messages}>
                {DialogsMessages}
                
                <AddMessageFormRedux onSubmit = {addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit} className={style.addmessage}>
            <div>
                <Field  className={style.text}  component = {"textarea"} 
                name = {"newMessageBody"} placeholder = {"Enter  your message"}/>
            </div>
            <div>
                <button className={style.button}>Добавить сообщение</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm ({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;