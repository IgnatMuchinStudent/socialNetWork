import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";

import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import ErrorBoundary from './components/error-boundry/error-boundry';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
    
    componentDidMount() {
        this.props.initializeApp();
    
    }
 
    render() {
        if (!this.props.initialized) {
            return <div className= "load"><Preloader/></div>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to={"/profile"}/>}/>

                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>

                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>

                        <Route path='/users'
                               render={() => <UsersContainer/>}/>

                        <Route path='/login'
                               render={() => <LoginPage/>}/>

                         <Redirect from="/" to="/profile" />
                    </Switch>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
    <ErrorBoundary>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
        </ErrorBoundary>
    </BrowserRouter>
}

export default SamuraiJSApp;
