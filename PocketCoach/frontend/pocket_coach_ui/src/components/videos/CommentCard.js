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
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  card: {
    marginTop:theme.spacing.unit,
    backgroundColor: theme.palette.grey[200],
  },
  img: {
    height: 100,
    margin: theme.spacing.unit,
  },
  avatar: {
    backgroundColor: red[500],
  },
});


class CommentCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {comment, classes} = this.props
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>G</Avatar>
          }
          action={(
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          )}
          title={comment.coachId}
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
