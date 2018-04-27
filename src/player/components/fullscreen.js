import React from 'react'
import IconFullScreen from '../../icons/components/full-screen'
import './fullscreen.css'

const FullScreen = (props) => (
  <div
    className='FullScreen'
    onClick={props.handleFullScreenClick}
  >
    <IconFullScreen
      color='white'
      size={20}
    />
  </div>
)

export default FullScreen
