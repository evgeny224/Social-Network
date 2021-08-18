import React from "react";
import style from "./Sidebar.module.css";
import Friend from "./Friends/Friends";


const Sidebar = (props) => {

    let FriendsElement = props.state.FriendsData.map(element => <Friend  id={element.id} image={element.image} name={element.name} key = {element.id}/>)

    return(
        <div className={style.title}>
            <div>Friends</div>
            <div className={style.list}>
                {FriendsElement}
            </div>
        </div>
    )
}

export default Sidebar;