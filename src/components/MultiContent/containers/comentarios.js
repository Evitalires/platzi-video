import React, {Component} from 'react'
import ComentariosUI from '../components/comentariosUI'
import NewComment from '../components/NewComment'
import ListComment from '../components/listComment'

class ComentariosContainer extends Component {
  state = {
    term: '',
    item: this.props.media.comments
  }
  handleChange = (event) => {
    this.setState({
      term: event.target.value
    })
    this.List.style.animation = ''
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      item: [{
        "author": this.props.user.name,
        "content": this.state.term,
        "img": this.props.user.img
      }, ...this.state.item ],
      term: ''
    })
    this.List.style.animation = 'signComment .5s forwards'
  }
  setList = element => {
    this.List = element
    console.log(this.List);
  }
  render () {
    return (
        <ComentariosUI>
          <NewComment
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.term}
            user={this.props.user}
          />
          <ListComment
            item={this.state.item}
            user={this.props.user}
            setList={this.setList}
          />
        </ComentariosUI>
    )
  }
}

export default ComentariosContainer
