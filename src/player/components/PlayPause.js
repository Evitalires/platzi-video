import React from 'react'
import './PlayPause.css'
import Play from '../../icons/components/play'
import Pause from '../../icons/components/pause'

const PlayPause = (props) => (
  <div className='PlayPause'
    >
    {
      props.pause
      ?
      <button
        onClick={props.handleClick}
        ref={props.setRef}
        >
          <Play size={25} color='white'/>
      </button>
      :
      <button
        onClick={props.handleClick}
        ref={props.setRef}
        >
          <Pause size={25} color='white'/>
      </button>
    }
  </div>
)

export default PlayPause
