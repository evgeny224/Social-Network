import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";




const Users = (props) => {

// Делим полученные данные из state, затем пушим их в массив с помощью цикла for 
//и выводводим с помощью метода map.

let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

let pages = [];

for (let i = 1; i <= pageCount; i ++){
    pages.push(i);
}
// С помощью метода onClick вызываем экшен из контейнера и передаем ему номер текущей страницы

    return <div>
    <div>
        { pages.map( p => {
            return <span className = { props.currentPage === p && style.selected} onClick = { (e) => {props.onPageChanged(p)}}>{p}</span>
        }) }
    </div>
    {
        props.users.map( users => <div key = {users.id}>
            <NavLink to = { "/profile/" + users.id}>
                <img src={users.photos.small != null ? users.photos.small : userPhoto} alt="avatar" className = {style.userPhoto}/>
            </NavLink>
            <div>
                {users.followed ? 
                    <button disabled = {props.followingInProgress.some(id => id === users.id)}
                        onClick = { () => { props.unfollow(users.id) }
                            }>Unfollow</button> : 
                    <button disabled = {props.followingInProgress.some(id => id === users.id)} 
                        onClick = { () => { props.follow(users.id) }
                    }>Follow</button>}
            </div>
            <div>{users.name}</div>
            <div>{users.status}</div>
            <div>{"users.location.city"}</div>
            <div>{"users.location.country"}</div>
        </div>)
    }
</div>
}

export default Users;