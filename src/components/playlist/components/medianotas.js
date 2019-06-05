import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends Component {
  constructor(props) {//Cambiando el contexto de this con Es6
    super(props)
    this.handleClick = this.handleClick.bind(this) //binding
    this.state = {
      author: props.author
    }
  }
  handleClick(event) {
    console.log(event)

    this.setState({
      author: 'Ricardo Celis'
    })
  }
  render() {
    const { title, author, image } = this.props //antes  this.props

    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid midnightblue',
      }
    }
    return (
      <div style={styles.container} onClick={this.handleClick}>
        <div className='Media-cover'>
          <img
            className='Media-image'
            src={image}
            alt="image bitcoin"
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
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media
