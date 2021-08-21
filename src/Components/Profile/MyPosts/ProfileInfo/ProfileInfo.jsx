import React from "react";
import style from "./ProfileInfo.module.css";
// import sand from "../../../../images/sand.jpg";
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = (props) => {
    
    if(!props.profile){
        return <Preloader />
    }
    
    return(
        <div className={style.content}>
            <div className={style.description}>
                <div>
                    <img  src = { props.profile.photos.large } alt=""/>
                </div>
                <div>
                    <ProfileStatusWithHooks status = {props.status} updateStatus = {props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;