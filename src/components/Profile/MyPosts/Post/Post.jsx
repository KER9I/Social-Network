import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
  return (
        <div className={style.Post}>
          <img src='https://cdn-icons-png.flaticon.com/512/147/147142.png'></img>
          { props.message }
          <div><button onClick={ () => { alert('Click') } }><span>Like</span></button> {props.likecounter} </div>
        </div>  
  );
}

export default Post;