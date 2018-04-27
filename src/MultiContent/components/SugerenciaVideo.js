import React, { Component } from 'react'
import './SugerenciaVideo.css'

class SugerenciaVideo extends Component {
  handleClick = event => {
    this.props.handleSetMedia(this.props)
  }
  render() {
    const { cover, title} = this.props
    return (
      <div
        className='SugerenciaVideo'
        onClick={this.handleClick}>
        <img src={cover} alt=""/>
        <p>{title}</p>
      </div>
    )
  }
}

export default SugerenciaVideo
