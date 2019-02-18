import React, { Component, Fragment } from 'react'
import { Typography } from '@material-ui/core';
import { CommentCard, NewComment } from '../../components';
import { CommentsStore} from "../../stores";
import PlayerAnnotationController from "./PlayerAnnotationController";

class VideoAnnotationsColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: CommentsStore.getAll(),
    }
  };

  componentWillMount() {
    CommentsStore.on("change", () => {
      this.setState({
        comments: CommentsStore.getAll(),
      })
    })
  }

  render() {
    const {comments} = this.state;
    return (
      <div>
        <PlayerAnnotationController />

        <br/>

        <div>
          <Typography variant="h6">
            Feedback({comments.length})
          </Typography>

          {this.state.comments.map((comment) =>
            <CommentCard comment={comment}/>
          )}
        </div>
      </div>
    )
  }
};

export default VideoAnnotationsColumn;