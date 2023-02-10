import React from 'react';
import style from './Info.module.css'
import gitIcon from '../../assets/images/gitIcon.png'

const Info = () => {
    return (
        <div>
            <div className={style.content}>
                <div>
                    <div className={style.contentTextName}>English:</div>
                    <div className={style.contentText}>
                        <strong>This site was developed not primarily to showcase your design skills,
                            but to show your skills in working with the following libraries/frameworks and programming
                            languages: <i>React, Redux, TypeScript, HTML, CSS</i></strong>
                    </div></div>
                <div>
                    <div className={style.contentTextName}>Українська:</div>
                    <div className={style.contentText}>
                        <strong>Цей сайт був розроблений в основному не для демонстрації своїх дизайнерських навичок,
                            а щоб показати навички із роботою з такими бібліотеками/фрейворками та мовами
                            програмування: <i>React, Redux, TypeScript, HTML, CSS</i></strong>
                    </div></div>
            </div>
            <div className={style.git}>
                My Github where you can seen my another works:
                <a href='https://github.com/KER9I' target='_blank' className={style.a}>
                    Github
                </a>
            </div>

        </div>
    );
}

export default Info;