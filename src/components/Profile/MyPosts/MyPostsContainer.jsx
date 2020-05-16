import React from 'react';
import {actions, addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}


const MyPostsContainer = connect(mapStateToProps, actions.addPostActionCreator)(MyPosts);

export default MyPostsContainer;