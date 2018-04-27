import React from 'react'
import SugerenciaVideo from './SugerenciaVideo'
import './SugerenciaVideos.css'

const SugerenciaVideos = (props) => {
  return (
    <div className='SugerenciaVideos'>
      {
        props.sugerencias.map( (item, index) => (
          <SugerenciaVideo
            key={index}
            {...item}
            handleSetMedia={props.handleSetMedia}/>
        ))
      }
    </div>
  )
}

export default SugerenciaVideos
