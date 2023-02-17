import React, {useState} from 'react';
import { AnyAction } from 'redux';
import style from './Post.module.css'


type PropsType = {
  message: string,
}


const Post: React.FC<PropsType> = ({message}) => {
  const [like, setLike] = useState(Math.ceil(Math.random()*20))
  const [dislike, setDislike] = useState(Math.ceil(Math.random()*10))
  const [likeChange, setLikeChange] = useState(false)
  const [likeTouched, setLikeTouched] = useState(false)
  const [dislikeChange, setDislikeChange] = useState(false)
  const [dislikeTouched, setDislikeTouched] = useState(false)



  const addLike = () => {
     setLike(prev => prev + 1)
     setLikeChange(true)
     setDislikeChange(false)
     setLikeTouched(true)
     setDislike(dislikeTouched ? dislike - 1 : dislike)
  }
  const addDislike = () => {
    setDislike(prev => prev + 1)
    setDislikeChange(true)
    setLikeChange(false)
    setDislikeTouched(true)
    setLike(likeTouched ? like - 1 : like)
 }

  return (
        <div className={style.Post}>
          <img src='https://cdn-icons-png.flaticon.com/512/147/147142.png' alt='img'></img>
          { message }
          <div className={style.likesbox}>
          <div style={{marginRight: '20px'}}><button disabled={likeChange} onClick={addLike}><span>Like</span></button> {like} </div>
          <div><button disabled={dislikeChange} onClick={addDislike}><span>Dislike</span></button> {dislike} </div>
          </div>
        </div>  
  );
}

export default Post;