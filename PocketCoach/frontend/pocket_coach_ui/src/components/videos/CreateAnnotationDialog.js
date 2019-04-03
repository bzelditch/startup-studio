import React, {Component,Fragment} from "react";
import {Fab, Dialog, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core/';
import {AnnotationForm} from '../';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  form: {
    width: 1000,
  },
});

class CreateAnnotationDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curVideo: this.props.curVideo,
      open: this.props.open,
      videoTimestamp: this.props.videoTimestamp,
    };

  }

  componentWillReceiveProps(props) {
    this.setState({
      curVideo: props.curVideo,
      open: props.open,
      videoTimestamp: props.videoTimestamp,
    })
  }

  render() {
    const {curVideo, open, videoTimestamp} = this.state;
    const {curCoach, classes} = this.props;

    return (
      <Fragment>
        <Dialog
          maxWidth="md"
          fullWidth
          open={open}
          onClose={this.props.handleClose}
        >
          <DialogTitle>Create a New Annotation.</DialogTitle>
          <DialogContent>
            <AnnotationForm curCoach={curCoach}
                            curVideo={curVideo}
                            videoTimestamp={videoTimestamp}
                            onSubmit={this.props.handleCreate}/>
          </DialogContent>

        </Dialog>
      </Fragment>
    )
  }
}

export default withStyles(styles)(CreateAnnotationDialog);