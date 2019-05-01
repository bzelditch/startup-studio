import React, {Component,Fragment} from "react";
import {Fab, Dialog, DialogContent, DialogContentText, DialogTitle, Typography} from '@material-ui/core/';
import {AnnotationForm} from '../';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  form: {
    width: 1000,
  },
  title: {
    backgroundColor: theme.palette.primary.main,
    paddingTop:theme.spacing.unit,
    paddingBottom:theme.spacing.unit,
  },
  titleText: {
    fontWeight:600,
    color:theme.palette.common.white,
  }
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
    const {curCoach, curStudent, classes} = this.props;
    console.log(this.props)
    return (
      <Fragment>
        <Dialog
          maxWidth="md"
          fullWidth
          open={open}
          onClose={this.props.handleClose}
          classes={{ paper: classes.dialogPaper }}
        >
          <DialogTitle
            classes={{
              root: classes.title,
            }}
            disableTypography
          >
            <Typography variant="h6" className={classes.titleText}>
              Create New Annotation
            </Typography>
          </DialogTitle>
          <br/>
          <DialogContent>
            <AnnotationForm curCoach={curCoach}
                            curStudent={curStudent}
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