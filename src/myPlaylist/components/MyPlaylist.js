import React from 'react'
import './MyPlaylist.css'

const MyPlaylist = (props) => {
  //const songs = Object.values(props.songs)
  return (
    <div className='MyPlaylist'>
      <h2>{props.title}</h2>
      <ol>
        {
          props.songs.map( (item, index) => {
            return (
              <li key={index}>

                <span>{item}</span>
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default MyPlaylist
