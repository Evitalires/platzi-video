import React from 'react'
import Play2 from '../../icons/components/play2'
import './SongContinue.css'

const SongContinue = (props) => {
  return (
    <div className='SongContinue'
      >
      <div
        className='SongContinue-icons'
        >
        <img
          src={props.src}
          alt={props.title}
          onClick={props.handleClick}
        />
        <div
          className={'SongContinue-svg'}
          onClick={props.handleClick}
        >
          <Play2
            color='white'
            size={35}
          />
        </div>
      </div>
      <div className="SongContinue-description">
        <p>Continua viendo</p>
        <p>{props.title}</p>
      </div>
    </div>
  )
}

export default SongContinue
