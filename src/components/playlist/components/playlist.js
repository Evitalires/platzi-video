import React, { Component } from 'react'
import Media from './media.js'
import './playlist.css'

//Componente Funcional
function Playlist(props) {
    return (
      <div className='Playlist'>
        {
          props.playlist.map( (item) => {
            return <Media openModal={props.handleOpenModal} {...item} key={item.id}/>
          })
        }
      </div>
    )
}

export default Playlist
