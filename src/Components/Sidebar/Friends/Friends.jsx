import React from "react";
import style from "./Friends.module.css"

const Friend = (props) => {
    return(
        <div className={style.person}>
            <div className={style.item}>
                <img src={props.image} alt="avatarka" />
            </div>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default Friend;