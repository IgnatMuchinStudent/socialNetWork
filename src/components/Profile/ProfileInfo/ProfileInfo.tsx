import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input className={s.inputfile} type={"file"} onChange={onMainPhotoSelected}/>}
               {isOwner && <label for="file">Choose a file</label>}
                { editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {setEditMode(true)} } profile={profile} isOwner={isOwner}/> }

                <ProfileStatus status={status} updateStatus = {updateStatus} />
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={s.inform}>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b> name :</b> <h3> {profile.fullName} </h3>
        </div>
        <div>
            <b>About me :</b> <h3>{profile.aboutMe?profile.aboutMe:"Censored"} </h3>
        </div>
    </div>
}




export default ProfileInfo;