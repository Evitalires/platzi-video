import React from 'react';
import './comentariosUI.css'

const ComentariosUI = (props) => (
  <div className='ComentariosUI'>
    <h2>Comentarios</h2>
    {
      props.children
    }
  </div>
)

export default ComentariosUI
