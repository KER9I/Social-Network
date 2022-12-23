import React from 'react';
import style from './Paginator.module.css'




let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    pages.splice(11, 2191);

    return (
        <div className={style.content}>
                {pages.map((p) => {
                    return <span className={props.currentPage === p && style.selected}
                        onClick={() => { props.onPageChanched(p) }}> {p}</span>
                })}
        </div>
    )}
            

export default Paginator;



