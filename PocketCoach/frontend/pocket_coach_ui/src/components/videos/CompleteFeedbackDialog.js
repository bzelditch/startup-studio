import React, {Component,Fragment} from "react";
import {Fab, Dialog, DialogContent, DialogContentText, DialogTitle,Typography} from '@material-ui/core/';
import {CompleteFeedbackForm} from '../';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
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

class CompleteFeedbackDialog extends Component {
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
    const {classes} = this.props;
    console.log("bah")
    console.log(classes)
    return (
      <Fragment>
        <Dialog
          maxWidth="md"
          open={open}
          onClose={this.props.handleClose}
        >
          <DialogTitle
            classes={{
              root: classes.title,
            }}
            disableTypography
          >
            <Typography variant="h6" className={classes.titleText}>
            Complete Feedback
            </Typography>
          </DialogTitle>
          <br/>
          <DialogContent>
            <CompleteFeedbackForm onSubmit={this.props.handleSubmit}/>
          </DialogContent>

        </Dialog>
      </Fragment>
    )
  }
}
export default withStyles(styles)(CompleteFeedbackDialog);