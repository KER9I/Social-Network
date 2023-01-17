import React from 'react';
import style from './../Messages.module.css'


type PropsType = {
    message: string
}

const Messagetext: React.FC<PropsType> = ({message}) => {
    return (
        <div className={style.message}>{message}</div>
    );
}

export default Messagetext;