import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Redirect, Route, Switch, withRouter, HashRouter} from "react-router-dom";

import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import ErrorBoundary from './components/error-boundry/error-boundry';
import {getAppSelector} from "./redux/app-selectors";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp:()=> void
}
class App extends Component<MapPropsType & DispatchPropsType> {

    componentDidMount() {
        this.props.initializeApp();

    }
    render() {
        if (!this.props.initialized) {
            return <div className = "load" > <Preloader/> </div>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                
                        <Route exact path='/'
                               render={() => <Redirect to={"/profile"} }/>

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

const mapStateToProps = (state:AppStateType) => ({
    initialized: getAppSelector(state)
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp: React.FC = () => {
    return <BrowserRouter>
        <ErrorBoundary>
        <Provider store={store}>
            <AppContainer />
        </
        </ErrorBoundary>
    </BrowserRouter>
}

export default SamuraiJSApp;
