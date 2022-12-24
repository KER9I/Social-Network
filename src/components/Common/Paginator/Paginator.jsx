import React, { useState } from 'react';
import style from './Paginator.module.css'




let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanched, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / pageSize);
    let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize))
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={style.content}>
            {portionNumber > 1 &&
                <button className={style.button} onClick={ () => setPortionNumber(portionNumber - 1) }>Prev</button>}
   
            {pages.filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={currentPage === p && style.selected}
                   key={p} onClick={() => { onPageChanched(p) }}> {p}</span>
            })}

            {portionCount > portionNumber &&
                <button className={style.button} onClick={ () => setPortionNumber(portionNumber + 1) }>Next</button>}
        </div>
    )
}


export default Paginator;



