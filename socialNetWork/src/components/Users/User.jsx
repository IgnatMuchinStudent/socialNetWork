import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
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
                            ? <button className={s.button} disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => { unfollow(user.id) }}>
                                Unfollow</button>
                            : <button className={s.button} disabled={followingInProgress.some(id => id === user.id)}
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