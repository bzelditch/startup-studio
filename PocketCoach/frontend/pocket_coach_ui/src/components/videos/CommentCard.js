import React from 'react';
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

const styles = {
  card: {
    marginLeft:10,
    marginTop:10,
  },
  img: {
    height: 100,
    margin: 10,
  },
  avatar: {
    backgroundColor: red[500],
  },
};


class CommentCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {comment} = this.props
    return (
      <Card style={styles.card}>
        <CardHeader
          avatar={
            <Avatar style={styles.avatar}>S</Avatar>
          }
          action={(
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          )}
          title={comment.studentId}
          subheader={comment.createTimestamp}
        />

        <CardContent>
          <Typography component="p">
            Timestamp: {comment.videoTimestamp} seconds
          </Typography>
          <Typography component="p">
            CommentId: {comment.commentId}
          </Typography>
          <br/>
          <Typography component="p">
            {comment.text}
          </Typography>
        </CardContent>

        {comment.images.map((img) =>
          <CardMedia
            style={styles.img}
            image={img}
          />
        )}

      </Card>
    );
  }
}

export default withStyles(styles)(CommentCard);
