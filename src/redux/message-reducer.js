const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
}

const messageReducer = (state = initialState, action) => {


    switch(action.type) {
        case ADD_MESSAGE: 
            let newMessage = action.newMessageBody;
            return { 
                ...state,
                MessageData: [...state.MessageData, {id:5, message: newMessage}],
                newMessageText: "",
            };
            default:
                return state;
    }

}

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody });


export default messageReducer;