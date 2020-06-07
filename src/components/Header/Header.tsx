import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.loginBlock}>
            { props.isAuth
                ? <div className={s.logo}><h2>Welcome {props.login}</h2><button  onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'} ><h2>Login</h2> </NavLink> }
        </div>
    </header>
}

export default Header;