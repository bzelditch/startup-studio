import React from 'react';
import {IconButton, Grid,  Typography}
from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import CoachStore from "../../stores/coaches/CoachStore";

const styles = theme => ({
  button: {
    margin: 0,
    padding: 0,
  },
});


class CommentsTimeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {comments, classes} = this.props

    return (
      <div>
        <Grid container  spacing={16}>
        {comments.map((comment) =>
          <Grid item key={comment.commentId}>
          <IconButton onClick={this.props.handleCommentTimelinePress(comment)} className={classes.button}>
            {CoachStore.getCoachAvatarById(comment.coachId)}
          </IconButton>
          <Typography variant="h6"> {comment.videoTimestamp.toFixed(2)} s</Typography>
          </Grid>
        )}
        </Grid>
      </div>
    );

  }
}

export default withStyles(styles)(CommentsTimeline)