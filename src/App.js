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
import { Component } from "react";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";

class App extends Component {

  componentDidMount(){
    this.props.initializeApp();
}

  render (){
    if(!this.props.initialized){
    return <Preloader />
    }
    return (
        <BrowserRouter>
          <div className="app-wrapper">
            <HeaderContainer />
            <Navbar state={this.props.appState.sidebarPage} />
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
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default  connect (mapStateToProps, {initializeApp})(App);
