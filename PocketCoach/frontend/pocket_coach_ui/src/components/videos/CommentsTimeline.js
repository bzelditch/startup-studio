import React from 'react';
import {Avatar, Fab, Grid, CardHeader, CardMedia, IconButton, Typography}
from "@material-ui/core";
import CommentCard from "./CommentCard";
import { withStyles } from '@material-ui/core/styles';
import red from "@material-ui/core/colors/red";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  avatar: {
    backgroundColor: red[500],
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
          <Fab onClick={this.props.handleCommentTimelinePress(comment)} className={classes.button}>
            <Avatar className={classes.avatar}>G</Avatar>
          </Fab>
          <Typography variant="h6"> {comment.videoTimestamp} s</Typography>
          </Grid>
        )}
        </Grid>
      </div>
    );

  }
}

export default withStyles(styles)(CommentsTimeline)