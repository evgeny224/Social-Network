import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage,  toggleFollowingProgress, getUsers } from "../../redux/users-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { compose } from "redux";

class UsersContainer extends React.Component {
    
    
    componentDidMount(){

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

}

onPageChanged = (pageNumber) => {

    this.props.getUsers(pageNumber, this.props.pageSize);

}



render(){

    return (
        <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users  totalUsersCount = {this.props.totalUsersCount}
                    pageSize = {this.props.pageSize}
                    currentPage = {this.props.currentPage}
                    onPageChanged = {this.onPageChanged}
                    unfollow = {this.props.unfollow}
                    follow = {this.props.follow}
                    users = {this.props.users}
                    followingInProgress = {this.props.followingInProgress}

            />
        </>
    )
}
}

//mapStateToProps Функция из которой буруться только нужные части для перерисовки компонента

    const mapStateToProps = (state) => {
        return {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
            followingInProgress: state.usersPage.followingInProgress,
        }
    }

    //Функция compose соеденяет все обработчики вместе

export default compose(
    withAuthRedirect,
    connect (mapStateToProps, 
        { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})
)(UsersContainer)