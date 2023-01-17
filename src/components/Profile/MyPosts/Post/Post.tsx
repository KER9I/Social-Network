import React from 'react';
import style from './Post.module.css'


type PropsType = {
  message: string 
  likecounter: number
}

const Post: React.FC<PropsType> = ({message, likecounter}) => {
  return (
        <div className={style.Post}>
          <img src='https://cdn-icons-png.flaticon.com/512/147/147142.png' alt='img'></img>
          { message }
          <div><button onClick={ () => { alert('Click') } }><span>Like</span></button> {likecounter} </div>
        </div>  
  );
}

export default Post;