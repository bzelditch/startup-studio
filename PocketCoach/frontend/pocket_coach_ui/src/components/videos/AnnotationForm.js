import React, {Component, Fragment} from "react";
import {Button, TextField, Typography,AppBar,Tab,Tabs,Grid} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import MicIcon from '@material-ui/icons/Mic';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PencilIcon from '@material-ui/icons/Edit';
import CommentStore from "../../stores/videos/CommentStore";

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

class AnnotationForm extends Component {
  constructor(props) {
    super(props);
    this.getVideoId = require('get-video-id');
    this.state = {
        selectedTab: 0,
        draftAnnotation: {
          commentId: null,
          videoId: props.curVideo.videoId,
          studentId: null,
          coachId: props.curCoach.coachId,
          createTimestamp: null,
          updateTimestamp: null,
          videoTimestamp: this.props.videoTimestamp,
          isDraft: true,
          commentChildren: [],

          text: "",
          images: [],
          videos: []
        },
        videoInfo: {
          url:"",
          preview:false,
          desc:"",
        }
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

  handleVideoInfoChange = name => event => {
    this.setState({
      videoInfo: {
        ...this.state.videoInfo,
        [name]: event.target.value,
      }
    });

  }

  handleYoutubePreview = () => {

    this.setState({
      videoInfo: {
        ...this.state.videoInfo,
        preview: true,
      }
    });

  };

  handleSubmit = () => {
    const videoInfo = this.state.videoInfo
    const videoProcessing = this.getVideoId(videoInfo.url)
    const videos = this.state.draftAnnotation.videos

    if (videoProcessing.id) {
      const videoObj = CommentStore.createAnnotationVideoObject(videoInfo.url, videoInfo.desc, videoProcessing.id, videoProcessing.service)
      videos.push(videoObj)
      console.log("push")
      console.log(videos)
    }

    console.log(this.state.draftAnnotation)

    this.props.onSubmit({
      ...this.state.draftAnnotation,
      videos: [
        ...this.state.draftAnnotation.videos,
        ,
      ]
    });

  };

  render() {
    const {selectedTab,draftAnnotation,videoInfo} = this.state;
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
            </Grid>

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
                />
                : selectedTab === 1 ?
                  <Typography variant="body1">Audio</Typography>
                  : <Fragment>
                      <Grid item xs={8}>
                        <TextField
                          fullWidth
                          label="Youtube URL"
                          value={videoInfo.url}
                          onChange={this.handleVideoInfoChange('url')}
                          margin="normal"
                        />
                      </Grid>
                      <Grid item xs={4} >
                        <Button color="primary" variant="outlined" onClick={this.handleYoutubePreview}>
                          Preview video
                        </Button>
                      </Grid>
                      {videoInfo.preview && this.getVideoId(videoInfo.url).id?
                        <iframe src={'https://www.youtube.com/embed/' + this.getVideoId(videoInfo.url).id}
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='video'
                        />
                        : null}
                      <TextField
                        variant="outlined"
                        multiline
                        fullWidth
                        rows="2"
                        value={videoInfo.desc}
                        onChange={this.handleVideoInfoChange('desc')}
                        placeholder="Provide a description of the video..."
                        margin="normal"
                      />
                    </Fragment>
              }
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



            <br/><br/>

            <Grid container xs={12} justify="flex-end">
              <Button color="primary" variant="contained" onClick={this.handleSubmit}>
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