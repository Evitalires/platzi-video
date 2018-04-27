import React from 'react'
import './User.css'

const User = (props) => (
  <div className='User'>
    <img
      src={props.img}
      alt={props.name}/>
    <p>{props.name}</p>
  </div>
)

export default User
