import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;



    return(
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}><img src={props.picture} alt="avatarka" />{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;