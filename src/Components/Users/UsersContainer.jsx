import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage,  toggleFollowingProgress, requestUsers } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { compose } from "redux";
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    
    
    componentDidMount(){

        this.props.requestUsers(this.props.currentPage, this.props.pageSize);

}

onPageChanged = (pageNumber) => {

    this.props.requestUsers(pageNumber, this.props.pageSize);

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

    // const mapStateToProps = (state) => {
    //     return {
    //         users: state.usersPage.users,
    //         pageSize: state.usersPage.pageSize,
    //         totalUsersCount: state.usersPage.totalUsersCount,
    //         currentPage: state.usersPage.currentPage,
    //         isFetching: state.usersPage.isFetching,
    //         followingInProgress: state.usersPage.followingInProgress,
    //     }
    // }

    const mapStateToProps = (state) => {
        return {
            users: getUsers(state),
            pageSize: getPageSize(state),
            totalUsersCount: getTotalUsersCount(state),
            currentPage: getCurrentPage(state),
            isFetching: getIsFetching(state),
            followingInProgress: getFollowingInProgress(state),
        }
    }

    //Функция compose соеденяет все обработчики вместе

export default compose(
    connect (mapStateToProps, 
        { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})
)(UsersContainer)