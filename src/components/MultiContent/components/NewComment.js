import React from 'react'
import './NewComment.css'

const NewComment = (props) => {
  return (
    <div className='NewComment'>
      <img
        src={props.user.img}
        alt="cover"/>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          value={props.value}
          placeholder='Escribe un comentario'
          onChange={props.handleChange}
        />
        <button type="submit">
          <p>+</p>
        </button>
      </form>
    </div>
  )
}

export default NewComment
