import React, {Fragment} from 'react';
import {
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core/';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';
import CoachStore from "../../stores/coaches/CoachStore";


const styles = theme => ({
  card: {
    marginTop:theme.spacing.unit,
    backgroundColor: theme.palette.grey[200],
  },
  img: {
    height: 100,
    margin: theme.spacing.unit,
  },

});


class CommentCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {comment, classes} = this.props;
    const commentCoachDetails = comment.coachId? CoachStore.getCoachDetailsById(comment.coachId): null;

    const break_after_comment = comment.text !== "" && comment.images !== [] || comment.text !== "" && comment.videos !== [];
    const break_after_images = comment.images !== [] && comment.videos !== [];
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            CoachStore.getCoachAvatarById(comment.coachId)
          }
          action={(
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          )}
          title={commentCoachDetails.firstName + " " + commentCoachDetails.lastName}
          subheader={
            <Fragment>
              <Typography color="textSecondary">
                {comment.createTimestamp}
              </Typography>
              <Typography color="textSecondary">
                Timestamp: {comment.videoTimestamp.toFixed(2)} s
              </Typography>
            </Fragment>

          }
        />

        <CardContent>
        <Typography component="body1">
          {comment.text}
        </Typography>

        {break_after_comment? <br/> : <p>hmmm</p>}

        {comment.images.map((img) =>
          <CardMedia
            className={classes.img}
            image={img}
          />
        )}

        {break_after_images? <br/> : <p>hmm</p>}

        {comment.videos.map((video) =>
          <Grid container spacing={24} >
            <Grid item xs={4}>
              <iframe src={'https://www.youtube.com/embed/' + video.youtubeId}
                      frameBorder='0'
                      allow='autoplay; encrypted-media'
                      allowFullScreen
                      title='video'
              />
            </Grid>
            <Grid item xs={8}>
              <Typography component="body1">
                {video.description}
              </Typography>
            </Grid>
          </Grid>
        )}
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(CommentCard);
