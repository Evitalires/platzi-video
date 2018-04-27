import React, { Component } from 'react'
import './description.css'
import Guardar from '../../icons/components/guardar'
import Compartir from '../../icons/components/compartir'

class Description  extends Component {
  handleClick = (event) => {
    this.setAnimation()
    this.props.handleAddMylist(this.props)
  }
  generateVisits = () => {
    return Math.floor(Math.random() * 500000)
  }
  setAnimation = () => {
    this.AddList.style.animation = 'click .3s forwards'
  }
  unsetAnimation = () => {
    this.AddList.style.animation = ''
  }
  setRef = element => {
    this.AddList = element
  }
  shouldComponentUpdate(nextProps) {
    if(this.props.media.title !== nextProps.title) {
      return true
    }
    else {
      return false
    }
  }
  render() {
    const { media, views } = this.props
    console.log('Render')
    return (
      <div className='Description'>
        <div className="Description-Initial">
          <h3>{media.title}</h3>
          <p>{this.generateVisits()} vistas</p>
        </div>
        <div className="About-video">
          <button
            ref={this.setRef}
            className='AddList'
            onClick={this.handleClick}
            onMouseUp={this.unsetAnimation}
            >
            Agregar a mi lista
          </button>
          <div>
            <Compartir size={20} color='gray'/>
            <span>Compartir</span>
          </div>
          <div>
            <Guardar size={20} color='gray'/>
            <span>Guardar</span>
          </div>
          <div className="Tags">
            <button>Eduación</button>
            <button>Desarrollo</button>
            <button>Música</button>
            <button>Fancy</button>
            <button>Especial</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Description
