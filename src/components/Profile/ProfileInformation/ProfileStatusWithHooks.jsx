import React, { useState } from 'react';
import { useEffect } from 'react';
import style from './ProfileInformation.module.css'


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
      setStatus(props.status);
    }, [props.status] )

    const activateEditMode = () => {
      setEditMode(true);
    }

    const deactivateEditMode = () => {
      setEditMode(false);
      props.updateStatus(status);
    }

    const onStatusChange = (event) => {
      setStatus(event.target.value)
  }

    return (
      <div className={style.content}>
        {!editMode &&
          <div>
            <span onDoubleClick={ activateEditMode }>{props.status || "No status"}</span>
          </div>
        }
        {editMode &&
          <div>
            <input onChange={ onStatusChange } autoFocus={true} onBlur={ deactivateEditMode } value={status} />
          </div>
        }
      </div>
    );
  }

export default ProfileStatusWithHooks;