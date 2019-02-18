import React, { Component } from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import { Player, ControlBar } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';

const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm',
};

export default class PlayerControllerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: sources.bunnyMovie,
      pauses: []
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      player: state,
    });

  }

  play() {
    this.refs.player.play();
  }

  pause() {
    this.refs.player.pause();
    const { player } = this.refs.player.getState();
    const currentTime = player.currentTime;
    this.setState((prevState) => ({
      pauses: [
        ...prevState.pauses,
        currentTime
      ]
    }))

  }

  load() {
    this.refs.player.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.refs.player.getState();
      const currentTime = player.currentTime;
      this.refs.player.seek(currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.refs.player.seek(seconds);
    };
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.refs.player.getState();
      const playbackRate = player.playbackRate;
      this.refs.player.playbackRate = playbackRate + steps;
    };
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.refs.player.getState();
      const volume = player.volume;
      this.refs.player.volume = volume + steps;
    };
  }

  setMuted(muted) {
    return () => {
      this.refs.player.muted = muted;
    };
  }

  changeSource(name) {
    return () => {
      this.setState({
        source: sources[name],
      });
      this.refs.player.load();
    };
  }

  render() {
    return (
      <div>
        <Player ref="player" autoPlay>
          <source src={this.state.source} />
          <ControlBar autoHide={false} />
        </Player>

        <div>
          <Button onClick={this.play}>
            play()
          </Button>
          <Button onClick={this.pause}>
            pause()
          </Button>
          <Button onClick={this.load} className="mr-3">
            load()
          </Button>
        </div>

        <div className="pb-3">
          <Button onClick={this.changeCurrentTime(10)} className="mr-3">
            currentTime += 10
          </Button>
          <Button onClick={this.changeCurrentTime(-10)} className="mr-3">
            currentTime -= 10
          </Button>
          <Button onClick={this.seek(50)} className="mr-3">
            currentTime = 50
          </Button>
        </div>
        <div className="pb-3">
          <Button onClick={this.changePlaybackRateRate(1)} className="mr-3">
            playbackRate++
          </Button>
          <Button onClick={this.changePlaybackRateRate(-1)} className="mr-3">
            playbackRate--
          </Button>
          <Button onClick={this.changePlaybackRateRate(0.1)} className="mr-3">
            playbackRate+=0.1
          </Button>
          <Button onClick={this.changePlaybackRateRate(-0.1)} className="mr-3">
            playbackRate-=0.1
          </Button>
        </div>
        <div className="pb-3">
          <Button onClick={this.changeVolume(0.1)} className="mr-3">
            volume+=0.1
          </Button>
          <Button onClick={this.changeVolume(-0.1)} className="mr-3">
            volume-=0.1
          </Button>
          <Button onClick={this.setMuted(true)} className="mr-3">
            muted=true
          </Button>
          <Button onClick={this.setMuted(false)} className="mr-3">
            muted=false
          </Button>
        </div>
        <div className="pb-3">
          <Button onClick={this.changeSource('sintelTrailer')} className="mr-3">
            Sintel teaser
          </Button>
          <Button onClick={this.changeSource('bunnyTrailer')} className="mr-3">
            Bunny trailer
          </Button>
          <Button onClick={this.changeSource('bunnyMovie')} className="mr-3">
            Bunny movie
          </Button>
          <Button onClick={this.changeSource('test')} className="mr-3">
            Test movie
          </Button>
        </div>

        <div>
          {this.state.pauses.map((pause) =>
            <Typography  variant="p">
              {pause}
            </Typography>
          )}
        </div>
      </div>
    );
  }
}
