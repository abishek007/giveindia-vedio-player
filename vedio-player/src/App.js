import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import './App.css';

class App extends Component {

  state = {
    selectedVideo: "",
    inputLinkValue: "",
    videoArr: [],
  }

  handleEnded = () => {
    const { videoArr } = this.state
    const updatedVedioArr = videoArr
    if (videoArr.length > 0) {
      this.setState({ selectedVideo: videoArr[0] })
      updatedVedioArr.shift()
      this.setState({ videoArr: updatedVedioArr })
    }
    console.log('onEnded')
  }

  handleInput = (event) => {
    console.log("event.target", event.target.value)
    this.setState({ inputLinkValue: event.target.value })
  }

  addVideoArr = () => {
    const { videoArr, inputLinkValue } = this.state
    let updatedVedioArr = videoArr
    if (!!inputLinkValue) {
      updatedVedioArr.push(inputLinkValue)
      this.setState({ inputLinkValue: "", videoArr: updatedVedioArr })
    }
  }

  render() {
    const { videoArr, inputLinkValue } = this.state

    return (
      <div className="video-player">
        {(videoArr.length > 0
        ? (
          <ReactPlayer
            url={videoArr.length > 0 && videoArr[0]}
            controls
            playing
            onEnded={this.handleEnded}
            className='react-player'
          />
        )
        : (
          <img src="https://neilpatel.com/wp-content/uploads/2015/09/youtube.png" alt="video-player" />
        ))
        }
        <div className="link-list-sec">
          <input onChange={this.handleInput} value={inputLinkValue} />
          <button onClick={this.addVideoArr}>Add Video Link</button>
          {videoArr.map((video) => (
            <p key={video}>{video}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default App
