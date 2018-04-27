import React from 'react'
import './Comment.css'

const Comment = (props) => {
  return (
    <div className='Comment' ref={props.setList}>
      <img src={props.item.img} alt="cover"/>
      <div className='Comment-data'>
        <p>{props.item.author}</p>
        <p>{props.item.content}</p>
      </div>
    </div>
  )
}

export default Comment
