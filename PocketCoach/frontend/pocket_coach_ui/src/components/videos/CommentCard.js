import React, {Fragment} from 'react';
import {
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Avatar,
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
                Timestamp: {comment.videoTimestamp} s
              </Typography>
            </Fragment>

          }
        />

        <CardContent>
        <Typography component="p">
          {comment.text}
        </Typography>
        </CardContent>

        {comment.images.map((img) =>
          <CardMedia
            className={classes.img}
            image={img}
          />
        )}

      </Card>
    );
  }
}

export default withStyles(styles)(CommentCard);
