import React, { Component } from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout'
import Video from '../components/video.js'
import Title from '../components/title.js'
import PlayPause from '../components/PlayPause'
import Timer from '../components/Timer'
import Controls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import FullScreen from '../components/fullscreen'
import { formatTime, isFullScreen, requestFullScreen, exitFullScreen } from '../../libs/utilities'

class VideoPlayer extends Component {
  state = {
    pause: false,
    duration: '00:00',
    time: '00:00',
    durationFloat: 0,
    timeFloat: 0,
    progress: 0,
    volume: 1,
    lastValue: null
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount() {
    console.log('Props en videoplayer', this.props.autoplay)
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      duration: formatTime(this.video.duration),
      durationFloat: this.video.duration
    })
  }
  handleTimeUpdate = event => {
    this.setState({
      time: formatTime(this.video.currentTime),
      timeFloat: this.video.currentTime
    })
  }
  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }
  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }
  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value
    this.setState({ volume: this.video.volume })
  }
  handleResetVolume = event => {
    const lastValue = this.video.volume
    this.setState({ lastValue })

    if(this.video.volume !== 0) {
      this.video.volume = 0
      this.setState({ volume: this.video.volume })
    }
    else {
      this.video.volume = this.state.lastValue
      this.setState({ volume: this.video.volume })
    }
  }
  handleFullScreenClick = event => {
    if (! isFullScreen() ) {
      //this.player.webkitRequestFullScreen()
      requestFullScreen(this.player)
    } else {
      //document.webkitExitFullscreen()
      exitFullScreen( this.player )
    }
  }
  setRef = element => {
    this.player = element
  }
  setAnimation = element => {
    this.playPause = element
  }
  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
          {
            this.props.isTitle &&
            <Title
              title={this.props.title}
            />
          }
          <Controls>
            <PlayPause
              pause={this.state.pause}
              handleClick={this.togglePlay}
            />
            <Timer
              duration={this.state.duration}
              currentTime={this.state.time}
            />
            <ProgressBar
              value={this.state.timeFloat}
              max={this.state.durationFloat}
              handleProgressChange={this.handleProgressChange}
            />
            <Volume
              handleVolumeChange={this.handleVolumeChange}
              handleResetVolume={this.handleResetVolume}
              volume={this.state.volume}
            />
            <FullScreen
              handleFullScreenClick={this.handleFullScreenClick}
            />
          </Controls>
          <Spinner
            active={this.state.loading}
          />
          <Video
            src={this.props.src}
            pause={this.state.pause}
            autoplay={this.props.autoplay}
            handleLoadedMetadata={this.handleLoadedMetadata}
            handleTimeUpdate={this.handleTimeUpdate}
            handleSeeking={this.handleSeeking}
            handleSeeked={this.handleSeeked}
            handlePause={this.togglePlay}
          />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer
