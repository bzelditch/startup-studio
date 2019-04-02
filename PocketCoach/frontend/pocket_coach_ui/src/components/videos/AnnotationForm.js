import React, {Component, Fragment} from "react";
import {Button, TextField, Typography,AppBar,Tab,Tabs,Grid} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import MicIcon from '@material-ui/icons/Mic';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PencilIcon from '@material-ui/icons/Edit';

//import PencilIcon from '@material-ui/icons/Videocam';

const styles = theme => ({
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: '100%',
  },
});

const videoId = 3;
const coachId = 1;

class AnnotationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        selectedTab: 0,
        draftAnnotation: {
          commentId: null,
          videoId: videoId,
          studentId: null,
          coachId: coachId,
          createTimestamp: null,
          updateTimestamp: null,
          videoTimestamp: this.props.videoTimestamp,
          isDraft: true,
          commentChildren: [],

          text: "",
          images: [],
          videos: []
        },
      }
  }

  componentWillReceiveProps(props) {
    this.setState({
      videoTimestamp: props.videoTimestamp,
    })
  }

  handleTabChange = (event, selectedTab) => {
    this.setState({ selectedTab });
  };

  handleChange = name => event => {
    this.setState({
      draftAnnotation: {
        ...this.state.draftAnnotation,
        [name]: event.target.value,
      }
    });
  }

  handleSubmit = () => {

    this.props.onSubmit({
      ...this.state.draftAnnotation,
    });

  };

  render() {
    const {selectedTab,draftAnnotation} = this.state;
    const {text} = draftAnnotation
    const {classes} = this.props;

    return (
      <Fragment>

        <Typography variant="body1">
          Timestamp: {draftAnnotation.videoTimestamp} seconds
        </Typography>

        <br/>

        <form className={classes.form}>
          <Grid container spacing={24} >
            <Grid item xs={12}>
              <AppBar position="static">
                <Tabs value={selectedTab} onChange={this.handleTabChange} variant="scrollable" scrollButtons="off">
                  <Tab icon={<PencilIcon />} label="Written feedback" />
                  <Tab icon={<MicIcon />} label="Audio feedback"/>
                  <Tab icon={<VideoLibraryIcon />} label="Sample videos"/>
                </Tabs>
              </AppBar>

              {selectedTab === 0 ?
                <TextField
                  variant="outlined"
                  multiline
                  fullWidth
                  rows="4"
                  value={text}
                  placeholder="Provide feedback..."
                  onChange={this.handleChange('text')}
                  margin="normal"

                /> :
                selectedTab === 1 ?
                  <Typography variant="body1">Audio</Typography> :
                  <Typography variant="body1">Video</Typography>}
                  {/*<TextField
                    variant="outlined"
                    multiline
                    fullWidth
                    rows="2"
                    value={draftAnnotation.text}
                    placeholder="Say something about this video..."
                    onChange={this.handleChange('text')}
                    margin="normal"
                  />*/}

            </Grid>

            <br/><br/>

            <Grid container xs={12} justify="flex-end">
              <Button color="primary" variant="raised" onClick={this.handleSubmit}>
                Post Feedback Annotation
              </Button>
            </Grid>
          </Grid>
        </form>
      </Fragment>
    )
  }
};

export default withStyles(styles)(AnnotationForm);