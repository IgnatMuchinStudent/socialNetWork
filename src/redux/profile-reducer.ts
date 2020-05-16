
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from '../types/types';
import {profileAPI} from "../api/profile-api";
import {usersAPI} from "../api/users-api";
import {BaseThunkType, inferActionsType} from "./redux-store";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const ADD_POST = 'social-network/profile/ADD-POST';
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const SET_STATUS = 'social-network/profile/SET_STATUS';
const DELETE_POST = 'social-network/profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'social-network/profile/SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: "what's up man?", likesCount: 12},
        {id: 2, message: 'so fine, how are you', likesCount: 11},
        {id: 3, message: 'we go to the cinema tonight', likesCount: 11},
        {id: 4, message: "oooo, it's ok", likesCount: 11}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
};


const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}

        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        
        default:
            return state;
    }
}

export const actions = {
   addPostActionCreator :(newPostText: string)=> ({type: ADD_POST, newPostText} as const),

   setUserProfile : (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const),

 setStatus : (status: string) => ({type: SET_STATUS, status} as const),

  deletePost : (postId: number) => ({type: DELETE_POST, postId} as const),

   savePhotoSuccess : (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos}as const)
}



export const getUserProfile = (userId: number):ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId: number):ThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(response));
}

export const updateStatus = (status: string):ThunkType => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status);

        if (response.resultCode === 0) {
            dispatch(actions.setStatus(status));
        }
    } catch(error) {
        //
    }
}
export const savePhoto = (file: any):ThunkType => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(response.data.photos));
    }
}
export const saveProfile = (profile: ProfileType):ThunkType => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);

    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0] }));
        return Promise.reject(data.messages[0]);
    }
}

export default profileReducer;
export type InitialStateType = typeof initialState;
type ActionsType = inferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>
