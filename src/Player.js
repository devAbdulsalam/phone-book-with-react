import React from "react";


 class Player {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div>
        <button onClick={this.playAudio}>
          <span>Play Audio</span>
        </button>
        <audio className="audio-element">
          <source src="/ringSound.mp3"></source>
        </audio>
      </div>
    )
  }
}

export default Player;