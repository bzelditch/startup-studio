import React, {Component,Fragment} from "react";
import {Fab, Dialog, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core/';
import {AnnotationForm} from '../';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      videoTimestamp: this.props.videoTimestamp,
    };

  }

  componentWillReceiveProps(props) {
    this.setState({
      open: props.open,
      videoTimestamp: props.videoTimestamp,
    })
  }

  render() {
    const {open, videoTimestamp} = this.state;

    return (
      <Fragment>
        <Dialog
          open={open}
          onClose={this.props.handleClose}
        >
          <DialogTitle>Create a New Annotation.</DialogTitle>
          <DialogContent>
            <AnnotationForm videoTimestamp={videoTimestamp} onSubmit={this.props.handleCreate}/>
          </DialogContent>

        </Dialog>
      </Fragment>
    )
  }
}