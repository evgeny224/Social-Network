import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import LoginPage from "./Components/Login/Login";


const App = (props) => {

  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar state={props.appState.sidebarPage} />
          <div className="app-wrapper-content">
            <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
            <Route path='/profile/:userId?'  render={ () => <ProfileContainer /> }/>
            <Route path ='/users' render={ () => <UsersContainer />} />
            <Route path='/news'  render={ () => <News/> }/>
            <Route path='/music'  render={ () => <Music/> }/>
            <Route path='/settings'  render={ () => <Settings/> }/>
            <Route path='/login' render={ () => <LoginPage />} />
          </div>
        </div>
        </BrowserRouter>
  );
}


export default App;
