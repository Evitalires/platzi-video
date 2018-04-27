//Contenedor Inteligente
import React, {Component} from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related.js'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import ModalSeguirViendo from '../../widgets/components/ModalSeguirViendo'
import SongContinue from '../../widgets/components/SongContinue'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'
import ContentPrincipal from '../../content/container/ContentPrincipal'

class Home extends Component {
  state = {
    modalVisible: false,
    modalSeguir: false,
    seguirViendo: false,
    nuevoVideo: false,
    myPlaylist: Object.values(this.props.data.user[0].myPlaylist.songs[0])
  }
  setRef = element => {
    this.modalSeguir = element
  }
  setRefHome = element => {
    this.HomeLayout = element
  }
  setMainContent = element => {
    this.MainContent = element
    console.log(this.MainContent);
  }
  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      modalSeguir: false,
      media
    })
    this.HomeLayout.style.animation = 'opacityOn 1s forwards'
  }
  handleSetMedia = (media) => {
    this.setState({
      seguirViendo: true,
      nuevoVideo: true,
      media
    })
    setTimeout(()=> {
      nuevoVideo: false
    }, 500)
  }
  handleCloseModal = (event) => {
    if(this.state.modalSeguir) {
      this.modalSeguir.className = 'ModalSeguir ModalSeguirViendo'
      setTimeout(() => {
        this.setState({
          modalvisible: false,
          modalSeguir: false,
          seguirViendo: false
        })
      }, 500)
    }
    else {
      this.setState({
        modalVisible: false,
        modalSeguir: true
      })
    }
    this.HomeLayout.style.animation = 'opacityOff 1s forwards'
  }
  handleAddMylist = (event) => {
    this.setState({
      myPlaylist: [...this.state.myPlaylist, this.state.media.title ]
    })
  }
  handleReturnVideo = (event) => {
    this.setState({
      seguirViendo: true
    })
    this.modalSeguir.className = `ModalSeguir ModalSeguirViendo`
    setTimeout(() => this.setState({
      modalSeguir: false
    }), 1000)
  }
  handleBack = (event) => {
    this.setState({
      seguirViendo: false,
      nuevoVideo: false
    })
  }
  render () {
    return (
      <HandleError>
        <HomeLayout setRef={this.setRefHome}>
          <Related
            className='Related'
            myPlaylist={this.state.myPlaylist}
            user={this.props.data.user}
          />
          <ContentPrincipal
            data={this.props.data}
            onchange={this.change}
            state={this.state}
            handleOpenModal={this.handleOpenModal}
            handlePlay={this.handlePlay}
            handleBack={this.handleBack}
            handleSetMedia={this.handleSetMedia}
            handleAddMylist={this.handleAddMylist}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <VideoPlayer
                  autoplay
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
          {
            this.state.modalSeguir &&
            <ModalContainer>
              <ModalSeguirViendo
                handleClick={this.handleCloseModal}
                setRef={this.setRef}
              >
                <SongContinue
                  src={this.state.media.cover}
                  title={this.state.media.title}
                  handleClick={this.handleReturnVideo}
                />
              </ModalSeguirViendo>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home
