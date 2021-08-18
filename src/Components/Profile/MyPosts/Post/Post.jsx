import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    return (
                <div className={style.item}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8SCQKFAMJ8BW_2FXCdUyTXm66A4eksY2iA&usqp=CAU" alt="avatar"/>
                    { props.message }
                    <div> 
                        <span>  like </span> { props.likes }
                    </div>
                </div>
    )
}

export default Post;