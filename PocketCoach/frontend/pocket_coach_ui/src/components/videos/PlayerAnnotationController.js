import React, { Component } from 'react';
import {Button, Typography, Divider,Grid} from '@material-ui/core';
import { Player, ControlBar } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';
import {CreateAnnotationDialog} from '../'
import * as CommentActions from "../../actions/videos/CommentActions";
import {  CommentCard, CommentsTimeline } from '../../components';
import CommentsStore from "../../stores/videos/CommentsStore";
import PlaylistPanel from "./PlaylistPanel";

function getCurrentDatePlusDays(days) {
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + days);
  return currentDate.toLocaleDateString('en-US', options);
}

export default class PlayerAnnotationController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curVideo: props.curVideo,
      createAnnotationDialogOpen: false,
      videoTimestamp:0,
      comments: CommentsStore.getAll(),
    };
  }

  componentWillMount() {
    CommentsStore.on("change", () => {
      this.setState({
        comments: CommentsStore.getAll(),
      })
    })
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

  handleCommentTimelinePress=(comment) => {
    return () => {
      this.refs.player.seek(comment.videoTimestamp);
    };
  }

  handleCloseCreateAnnotationDialog = () => {
    this.setState({ createAnnotationDialogOpen: false });
  };

  handleCreateAnnotation=(annotation) => {
    this.handleCloseCreateAnnotationDialog();
    CommentActions.createAnnotationAction(annotation);
  }

  render() {
    const {videoTimestamp,createAnnotationDialogOpen,comments, curVideo} = this.state;
    return (
      <div>
        <CreateAnnotationDialog
          open={createAnnotationDialogOpen}
          videoTimestamp={videoTimestamp}
          handleClose={this.handleCloseCreateAnnotationDialog}
          handleCreate={this.handleCreateAnnotation}/>

        <Player ref="player" >
          <source src={curVideo.videoPath} />
          <ControlBar autoHide={false} />
        </Player>


        <br/>

        <Grid container spacing={24} >
          <Grid item xs={7}>
            <Typography variant="h6">
              {curVideo.title}
            </Typography>
            <Typography variant="p">
              {curVideo.createTimestamp}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleOpenCreateAnnotationDialog}>
              Create Feedback Annotation
            </Button>
          </Grid>
        </Grid>

        <br/>
        <Divider/>
        <br/>

        <Typography variant="h6">
          Goals:
        </Typography>
        <Typography variant="p">
          {curVideo.goals}
        </Typography>

        <br/>
        <Divider/>
        <br/>

        <br/>

        <Typography variant="h6">
          Feedback({comments.length})
        </Typography>

        <CommentsTimeline comments={comments}
                          handleCommentTimelinePress={this.handleCommentTimelinePress}/>

        <br/>

        {this.state.comments.map((comment) =>
          <CommentCard comment={comment}/>
        )}
      </div>
    );
  }
}
