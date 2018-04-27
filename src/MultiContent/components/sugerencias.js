import React from 'react'
import Playlist from '../../playlist/components/playlist.js'
import SugerenciaVideos from './SugerenciaVideos'
import './sugerencias.css'

const Sugerencias = (props) => {
  return (
    <div className='Sugerencias'>
      <h2>Sugerencias</h2>
      <SugerenciaVideos
        sugerencias={props.sugerencias}
        handleSetMedia={props.handleSetMedia}
      />
    </div>
  )
}

export default Sugerencias
