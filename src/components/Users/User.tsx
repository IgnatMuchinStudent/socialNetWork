import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import { UserType } from '../../types/types';
type PropsType = {
    user:UserType,
    followingInProgress:Array<number>,
    unfollow:(userId: number)=>void,
    follow: (userId: number)=>void

}


let User:React.FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {
 let follUnfoll = followingInProgress
    .some(id => id === user.id)
    return (
       <div>
                <span>
                    <div>
                       <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={s.userPhoto} />
                       </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button className={s.button } disabled={follUnfoll}
                                      onClick={() => { unfollow(user.id) }}>
                                Unfollow</button>
                            : <button className={s.button} disabled={follUnfoll}
                                      onClick={() => { follow(user.id) }}>
                                      Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <h4>  {user.name}</h4>
                        <h4> {user.status? user.status:"no status"}</h4>
                    </span>
                    <span>
                    </span>
                </span>
            </div>)
}

export default User;