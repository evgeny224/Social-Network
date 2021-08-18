import React from "react";
import preloader from "../../../assets/images/preloder.gif";
import style from "./Preloder.module.css"


const Preloader = (props) => {
    return <div>
        <img src = {preloader} alt="" className = {style.preloder}/>
    </div>
}

export default Preloader;