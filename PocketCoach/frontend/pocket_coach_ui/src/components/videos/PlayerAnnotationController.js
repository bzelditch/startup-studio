import React, { Component } from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import { Player, ControlBar } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';
import {AnnotationForm, CreateAnnotationDialog} from '../'
import * as CommentActions from "../../actions/videos/CommentActions";

const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm',
};

export default class PlayerAnnotationController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: sources.bunnyMovie,
      createAnnotationDialogOpen: false,
      videoTimestamp:0,
    };
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

  handleOpenCreateAnnotationDialog = () => {
    this.refs.player.pause();
    const { player } = this.refs.player.getState();
    const videoTimstamp = player.currentTime;

    this.setState(
      { createAnnotationDialogOpen: true,
        videoTimestamp: videoTimstamp,
      });

  };

  handleCloseCreateAnnotationDialog = () => {
    this.setState({ createAnnotationDialogOpen: false });
  };

  handleCreateAnnotation=(annotation) => {
    this.handleCloseCreateAnnotationDialog();
    CommentActions.createAnnotationAction(annotation);
  }

  render() {
    const {videoTimestamp,createAnnotationDialogOpen} = this.state;
    return (
      <div>
        <Player ref="player" >
          <source src={this.state.source} />
          <ControlBar autoHide={false} />
        </Player>

        <Button
          variant="contained"
          color="primary"
          onClick={this.handleOpenCreateAnnotationDialog}>
          Create Feedback Annotation
        </Button>

        <CreateAnnotationDialog
          open={createAnnotationDialogOpen}
          videoTimestamp={videoTimestamp}
          handleClose={this.handleCloseCreateAnnotationDialog}
          handleCreate={this.handleCreateAnnotation}/>
      </div>
    );
  }
}
