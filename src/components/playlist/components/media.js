import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './media.css'

//El componenete funcional no se re-renderiza si sus propiedades no son distintas
class Media extends PureComponent {
  state = {
    author: 'Jair Escobar',
  }
  handleClick = event => {
    this.props.openModal(this.props)
  }
  render() {
    const { author } = this.state
    const { cover, title } = this.props

    return (
      <div className='Media' onClick={this.handleClick}>
        <div className='Media-cover'>
          <img
            className='Media-image'
            src={cover}
            alt="bitcoin"
            width={260}
            height={170}
          />
          <h3 className='Media-title'> {title} </h3>
          <p className='Media-autor'> {author} </p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media
