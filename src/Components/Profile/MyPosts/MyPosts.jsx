import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import { required, maxLenghtCreator } from "../../../Utils/validators/validators";
import { Textarea } from "../../../Components/Common/FormsControls/FormsControls";

const macLength = maxLenghtCreator(10);

const MyPosts = (props) => {


    let PostsElements = props.postsData.map( element => <Post message={element.message} likes={element.likes} />)


    const addNewPost = (value) => {
        props.addPost(value.newPostBody)
    }
    
    return (
        
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit = {addNewPost}/>
            <div>New post</div>
                {PostsElements}
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field name = {"newPostBody"} component = {Textarea}  placeholder = {"My information"} validate = {[required, macLength]}  />
            </div>
            <div className={style.button}>
                <button >Добавить пост</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm ({form: "profileAddPostForm"})(AddPostForm)

export default MyPosts;