import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import { getProfileSelector, getStatusSelector, getAuthorizedId, getisAuth } from '../../redux/profile-selectors';

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId ) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props}
                    isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state) => {
    //console.log('mapStateToProps PROFILE')
    return ({
        profile: getProfileSelector(state),
        status: getStatusSelector(state),
        authorizedUserId: getAuthorizedId(state),
        isAuth: getisAuth(state)
    })
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer);




