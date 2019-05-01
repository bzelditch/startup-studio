import React, { Component } from 'react';
import {Button, Typography, Divider,Grid} from '@material-ui/core';
import { Player, ControlBar } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';
import * as CommentActions from "../../actions/videos/CommentActions";
import { CommentCard, FeedbackCard, CommentsTimeline, CreateAnnotationDialog, CompleteFeedbackDialog } from '../../components';
import CommentsStore from "../../stores/videos/CommentStore";
import FeedbackStore from "../../stores/videos/FeedbackStore";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    alignItems: 'baseline',
  },
});

class PlayerAnnotationController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curVideo: props.curVideo,
      createAnnotationDialogOpen: false,
      completeFeedbackDialogOpen: false,
      videoTimestamp:0,
      comments: CommentsStore.getAllCommentsForVideoId(props.curVideo.videoId),
      feedback: FeedbackStore.getAllFeedbackForVideoId(props.curVideo.videoId),
    };
  }

  componentWillMount() {
    CommentsStore.on("change", () => {
      this.setState({
        comments: CommentsStore.getAllCommentsForVideoId(this.state.curVideo.videoId),
      })
    })

    FeedbackStore.on("change", () => {
      this.setState({
        feedback: FeedbackStore.getAllFeedbackForVideoId(this.state.curVideo.videoId),
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

  handleCommentTimelinePress=(comment) => {
    return () => {
      this.refs.player.seek(comment.videoTimestamp);
    };
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
    CommentActions.createDraftAnnotationAction(annotation);
  }

  handleOpenCompleteFeedbackDialog = () => {
    this.refs.player.pause();

    this.setState(
      { completeFeedbackDialogOpen: true,
      });

  };

  handleCloseCompleteFeedbackDialog = () => {
    this.setState({ completeFeedbackDialogOpen: false });
  };

  handleCompleteFeedback=(feedback) => {
    console.log("handleCompleteFeedback")
    console.log(feedback)
    this.handleCloseCompleteFeedbackDialog();
    CommentActions.createFeedbackAction(feedback);
  }


  render() {
    const {videoTimestamp,createAnnotationDialogOpen,completeFeedbackDialogOpen,comments, curVideo} = this.state;
    const {curCoach, curStudent, classes} = this.props;
    return (
      <div>
        <CreateAnnotationDialog
          curCoach={curCoach}
          curStudent={curStudent}
          curVideo={curVideo}
          open={createAnnotationDialogOpen}
          videoTimestamp={videoTimestamp}
          handleClose={this.handleCloseCreateAnnotationDialog}
          handleCreate={this.handleCreateAnnotation}/>

        <CompleteFeedbackDialog
          curCoach={curCoach}
          curVideo={curVideo}
          open={completeFeedbackDialogOpen}
          handleClose={this.handleCloseCompleteFeedbackDialog}
          handleSubmit={this.handleCompleteFeedback}/>

        <Player ref="player" >
          <source src={curVideo.videoPath} />
          <ControlBar autoHide={false} />
        </Player>

        <br/>

        <Grid container spacing={24} >
          <Grid item xs={8}>
            <Typography variant="h6">
              {curVideo.title}
            </Typography>
            <Typography variant="body1">
              {curVideo.createTimestamp}
            </Typography>

          </Grid>
          <Grid item container xs={4} justify="flex-end"  alignItems="baseline">
            <Button
              variant="contained"
              color="secondary"
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

        {this.state.feedback.map((feedback) =>
          <FeedbackCard feedback={feedback}/>
        )}

        <br/>

        {this.state.comments.map((comment) =>
          <CommentCard comment={comment}/>
        )}

        <br/>

        {curCoach?
        <Grid container xs={12} justify="flex-end" >
          <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleOpenCompleteFeedbackDialog}>
            Submit Feedback
          </Button>
          </Grid>
        </Grid>
          :null}
      </div>
    );
  }
}

export default withStyles(styles)(PlayerAnnotationController);
