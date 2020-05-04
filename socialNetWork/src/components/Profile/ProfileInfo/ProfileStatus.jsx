import React, {useState, useEffect} from 'react';
import s from "./ProfileStatus.module.css"
const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            { !editMode &&
            <div>
                <b className={s.status}>Status: </b> <span onDoubleClick={ activateEditMode } className={s.hide}>{props.status || "-------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} className={s.open} autoFocus={true} onBlur={ deactivateEditMode }
                       value={status} />
            </div>
            }
        </div>
    )
}


export default ProfileStatus;