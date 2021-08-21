import React from "react";
import style from "./Header.module.css";
import logo from "./../../images/wolf_logo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return(
        <header className={style.header} >
            <div>
                <img className={style.img}  src={logo} alt="logo" />
            </div>
            <div className = { style.loginBlock}>
                {props.isAuth ? 
                <div>{props.login} - <button onClick = {props.logout}>Log out</button></div> :
                <NavLink to = { "/login" }>
                    Login
                </NavLink>}
            </div>
        </header>
    )
}

export default Header;