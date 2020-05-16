import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type RootReducerType = typeof rootReducer; 
export type AppStateType = ReturnType<RootReducerType>
export type PropertieType<T> = T extends{[key:string]: infer U}?  U: never
export type inferActionsType<T extends {[key:string]: (...args:any[])=>any}> = ReturnType<PropertieType<T> >
export type BaseThunkType<AT extends Action,R = Promise<void>> = ThunkAction<R, AppStateType, unknown, AT>



const store = createStore(rootReducer, (applyMiddleware(thunkMiddleware)))


export default store
