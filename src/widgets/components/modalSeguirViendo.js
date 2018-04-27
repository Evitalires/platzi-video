import React from 'react'
import './modalSeguir.css'

const ModalSeguirViendo = (props) => {
  return(
    <div
      className='ModalSeguir ModalStaySeeOpen'
      ref={props.setRef}
    >
      {props.children}
      <button
        onClick={props.handleClick}
        className='ModalSeguir-close'
      />
    </div>
  )
}

export default ModalSeguirViendo
