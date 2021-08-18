import  profileReducer  from "./profile-reducer";
import  messageReducer  from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";
    

let store ={

    _state: {
        profilePage:{
            postsData: [   
            {id: 1, message:"Hello World!", likes: 4},
            {id: 2, message:"It is my favorite day.", likes: 1},
            {id: 3, message:"I am glad to see you.", likes: 2},
            {id: 4, message:"Me too!", likes: 5},
            {id: 5, message:"How knows that man?", likes: 6},
        ],
        newPostText: "My-Information",},
        messagePage:{
            DialogsData: [ 
                {id: 1, name: "Eva", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24XtoREBBzSPEUzf0f4xVi6YnKS6yA0-rhKHbiAE-_oIAMzNSmrVPwuzN1d0ajPDaXj4&usqp=CAU"},
                {id: 2, name: "Olga", picture:"https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg"},
                {id: 3, name: "Nick", picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfNHQ78zty5ZpAoBPBARyRvoPOhIgXXch0yg&usqp=CAU"},
                {id: 4, name: "Petr", picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkIiZXLQBb45Inw27EERnx1l-cLedtIZfNQ&usqp=CAU"},
                {id: 5, name: "Kir", picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyzX9moaxytlCCkDQtPF2hVKZBEmDJyhBgoA&usqp=CAU"},
                {id: 6, name: "Alex", picture:"https://picsy.ru/images/photos/1200/2/rys-avatarka-31358666.jpg"},
            ],
            MessageData: [     
                {id: 1, message: "Hello every one!"},
                {id: 2, message: "Hi!"},
                {id: 3, message: "Nice to meet you!"},
                {id: 4, message: "Thank you very mutch!"},
            ],
            newMessageText: "Message Text",
        },
        sidebarPage:{
            FriendsData:[
                {id: 1, name:"Sveta", image:"https://trikky.ru/wp-content/blogs.dir/1/files/2020/03/29/avatarka.jpg"},
                {id: 1, name:"Oleg", image:"https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"},
                {id: 1, name:"Victor", image:"https://anime-fans.ru/wp-content/uploads/2021/05/Prikolnye-avatarki-dlya-vatsapa-anime-kollektsiya_23.jpg"},
            ]
        }
    },
    callSubscriber() {
        console.log("State chenged");
    },

    getState(){
        return this._state;
    },

    addPost () {

        let newPost = {
            id:6,
            message: this._state.profilePage.newPostText,
            likes: 0,
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },

    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    addMessage () {
        
        let newMessage = {
            id:5,
            message: this._state.messagePage.newMessageText,
        };
        this._state.messagePage.MessageData.push(newMessage);
        this._state.messagePage.newMessageText = "";
        this._callSubscriber(this._state);
    },

    updateNewMessageText (newMessage) {
        this._state.messagePage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
    }
}


    window.store = store;

    export default store;