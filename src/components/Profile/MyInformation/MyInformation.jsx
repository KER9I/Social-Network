import React from 'react';
import style from './MyInformation.module.css'


const MyInformation = () => {
  return (
    <div className={style.content}>
      <div >
        <img src='http://dgdesign.ru/uploads/posts/2019-02/1549455082_shapka-sayta-vesna-1151132.jpg' alt='img' width='100%'></img>
      </div>
      <div>
        avatat + information
      </div>
    </div>
  );
}

export default MyInformation;