import React, { useState } from "react";






const ProfileStatusWithHooks = (props) => {

    // let stateWithSetState = useState(false);
    let  [editMide, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    const activeEditMode = () => {
        setEditMode(true);
    }
    
    const deactiveEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

        return(
            <div>
                {!editMide &&
                    <div>
                        <span onDoubleClick = {activeEditMode} >{props.status || "--------"}</span>
                    </div>
                }
                {editMide &&
                    <div>
                        <input onChange = {onStatusChange} autoFocus = {true} onBlur = {deactiveEditMode} value = {status}/>
                    </div>
                }
            </div>
        )
    }


export default ProfileStatusWithHooks;