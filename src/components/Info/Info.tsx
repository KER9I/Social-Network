import React from 'react';
import style from './Info.module.css'
import gitIcon from '../../assets/images/gitIcon.jpg'

const Info = () => {
    return (
        <>
            <div className={style.content}>
                <div>
                    <div className={style.contentText}>
                        <strong>This site was developed not primarily to showcase your design skills,
                            but to show your skills in working with the following libraries/frameworks and programming
                            languages: <i>React, Redux, TypeScript, HTML, CSS</i></strong>
                    </div></div>
            </div>
            <div className={style.loginization}>         
                Login and password with which you can test this site:
                <div className={style.logPass}>
                <div>Login: <span style={{color: 'red', margin: '50px'}}>free@samuraijs.com</span></div>
                <div>Password: <span style={{color: 'red', margin: '16px'}}>free</span></div>
                </div>
            </div>
            <div className={style.git}>
                My Github where you can seen my another works:
                <div style={{marginLeft: '10px'}}>
                    <img src={gitIcon} style={{mixBlendMode: 'normal'}} height='20px' />
                    <a href='https://github.com/ksaviuk' target='_blank' className={style.a}>Github</a>
                    </div>
            </div>
        </>
    );
}

export default Info;