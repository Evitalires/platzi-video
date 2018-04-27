import React from 'react'
import PlayPause from '../../player/components/PlayPause'
import Back from '../../icons/components/back'
import VideoPlayer from '../../player/containers/video-player'
import ComentariosContainer from '../containers/comentarios'
import Description from './description'
import Sugerencias from './sugerencias'
import './MultiContent.css'

const MultiContent = (props) => {
  const { media } = props.state
  return (
    <div className="MultiContent">
      <div className="MultiContent-Reproductor">
        <VideoPlayer
          autoplay
          isTitle={false}
          src={media.src}
        />
        <div className='Back' onClick={props.handleBack} >
          <Back color='white'size={45}/>
        </div>
      </div>
      <Description
        media={media}
        user={props.user}
        handleAddMylist={props.handleAddMylist}
      />
      <ComentariosContainer media={media} user={props.user}/>
      <Sugerencias
        sugerencias={props.user.sugerencias}
        handleSetMedia={props.handleSetMedia}
      />
    </div>
  )
}

export default MultiContent
