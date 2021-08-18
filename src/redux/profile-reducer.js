import { userAPI, profileAPI } from "../api/api";

const ADD_TEXT = "ADD-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    postsData: [   
        {id: 1, message:"Hello World!", likes: 4},
        {id: 2, message:"It is my favorite day.", likes: 1},
        {id: 3, message:"I am glad to see you.", likes: 2},
        {id: 4, message:"Me too!", likes: 5},
        {id: 5, message:"How knows that man?", likes: 6},
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_TEXT: {
            let newPost = action.newPostBody;
            return {
                ...state,
                newPostText: "",
                postsData: [...state.postsData, {id: 6, message: newPost, likes: 0}]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default: 
            return state;
    }

}
// Экшен-криэйторы
export const addPostActionCreator = (newPostBody) => ({ type: ADD_TEXT, newPostBody });

// export const onPostCangeActionCreator = (text) => ({ type: UPADATE_NEW_POST_TEXT, newText: text });

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type: SET_STATUS, status});

//Это thunk-функции

export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(response =>{
        dispatch(setUserProfile(response.data));
    })
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response =>{
        dispatch(setStatus(response.data));
    })
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response =>{
        if(response.data.resultCode === 0){
        dispatch(setStatus(status));
        }
    })
};

export default profileReducer;