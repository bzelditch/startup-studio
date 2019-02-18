import React, {Component, Fragment} from "react";
import {Button, TextField, Typography} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  formControl: {
    width: 500,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class AnnotationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        commentId: null,
        videoId: 1,
        studentId: 1,
        coachId: null,
        createTimestamp: null,
        updateTimestamp: null,
        videoTimestamp: this.props.videoTimestamp,
        commentChildren: [],

        text: "",
        images: [],
        videos: [],
      }
  }

  componentWillReceiveProps(props) {
    this.setState({
      videoTimestamp: props.videoTimestamp,
    })
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

    //this.setState(this.getInitialState());
  };

  render() {
    const {text,videoTimestamp} = this.state;
    const {classes} = this.props;
    return (
      <Fragment>
        <Typography variant="p">
          Annotation Form
        </Typography>
      <Typography variant="p">
        Timestamp: {videoTimestamp} seconds
      </Typography>
        <form>
          <TextField
            multiline
            rows="4"
            label="Feedback"
            value={text}
            onChange={this.handleChange('text')}
            margin="normal"
            className={classes.formControl}
          />
          <br/>
          <Button color="primary" variant="raised" onClick={this.handleSubmit}>
            Post Feedback
          </Button>
        </form>
      </Fragment>
    )
  }
};

export default withStyles(styles)(AnnotationForm);