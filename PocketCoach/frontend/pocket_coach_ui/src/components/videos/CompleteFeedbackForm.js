import React, {Component, Fragment} from "react";
import {Button, TextField, Typography} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  formControl: {
    width: 700,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class CompleteFeedbackForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoFeedbackId: null,
      coachId: 1,
      videoId: 3,
      createTimestamp: null,
      updateTimestamp: null,
      commentChildren: [],
      keyNextSteps: "",
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit = () => {
    this.props.onSubmit({
      ...this.state,
    });

  };

  render() {
    const {keyNextSteps} = this.state;
    const {classes} = this.props;
    return (
      <Fragment>
        <Typography variant="subtitle1">
          Key Next Steps
        </Typography>
        <form>
          <TextField
            variant="outlined"
            multiline
            rows="4"
            value={keyNextSteps}
            placeholder="Specify specific goals or objectives to work on until next session..."
            onChange={this.handleChange('keyNextSteps')}
            margin="normal"
            className={classes.formControl}
            fullWidth
          />
          <br/>

          <Button color="secondary" variant="contained" onClick={this.handleSubmit}>
            Submit Feedback
          </Button>
        </form>
      </Fragment>
    )
  }
};

export default withStyles(styles)(CompleteFeedbackForm);