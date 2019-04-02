import React, {Component,Fragment} from "react";
import {Fab, Dialog, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core/';
import {CompleteFeedbackForm} from '../';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
    };

  }

  componentWillReceiveProps(props) {
    this.setState({
      open: props.open,
    })
  }

  render() {
    const {open} = this.state;

    return (
      <Fragment>
        <Dialog
          open={open}
          onClose={this.props.handleClose}
        >
          <DialogTitle>Complete Feedback</DialogTitle>
          <DialogContent>
            <CompleteFeedbackForm onSubmit={this.props.handleSubmit}/>
          </DialogContent>

        </Dialog>
      </Fragment>
    )
  }
}