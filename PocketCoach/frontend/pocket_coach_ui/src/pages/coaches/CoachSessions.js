import React, {Component} from 'react';
import { Typography, Grid, Card, Link,CardHeader} from '@material-ui/core';
import {Breadcrumbs} from '@material-ui/lab';
import {VideoAnnotationsColumn} from "../../components";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function getCurrentDatePlusDays(days) {
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + days);
  return currentDate.toLocaleDateString('en-US', options);
}


const videos = [
  {
    videoId: 1,
    studentId: 1,
    coachIds: [1],
    title: "Q1/Q2 Presentation: First try!",
    icon: 1,
    createTimestamp: getCurrentDatePlusDays(-13),
    numFeedback: 7,
    videoPath: require('../../static/videos/attempt1.m4v'),
    goals: "Please give me feedback on my delivery skills and the presentation conent.  I am preparing to pitch to a VC."
  },
  {
    videoId: 2,
    studentId: 1,
    coachIds: [1],
    title: "Q1/Q2 Presentation: Second try!",
    icon: 2,
    createTimestamp: getCurrentDatePlusDays(-3),
    numFeedback: 3,
    videoPath: require('../../static/videos/attempt2.m4v'),
    goals: "Please give me feedback on my delivery skills and the presentation conent.  I am preparing to pitch to a VC."
  },
  {
    videoId: 3,
    studentId: 1,
    coachIds: [1],
    title: "Q1/Q2 Presentation: Third try!",
    icon: 3,
    createTimestamp: getCurrentDatePlusDays(0),
    numFeedback: 2,
    videoPath: require('../../static/videos/attempt3.m4v'),
    goals: "Please give me feedback on my delivery skills, especially presence and pacing.  I am preparing to pitch to a VC."
  },
  {
    videoId: 4,
    studentId: 1,
    coachIds: [1],
    title: "Rocky Studio!",
    icon: 1,
    createTimestamp: getCurrentDatePlusDays(-40),
    numFeedback: 4,
    videoPath: require('../../static/videos/rocky_video2.mp4'),
    goals: "Please give me feedback on my delivery skills and the presentation conent.  I am preparing to pitch to a VC."
  },
];


class CoachSessions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: videos,
      curVideoId:3,
    }
  };

  getVideoDetails(videoId) {
    console.log("getVideoDetails");
    console.log(videoId);
    const videoDetails = this.state.videos.find(v => v.videoId === videoId )
    return videoDetails;
  }

  render() {
    const {curVideoId} = this.state;
    const curVideo = this.getVideoDetails(curVideoId);
    const { classes } = this.props;

    return (
      <Grid container spacing={24} className={classes.root}>
        <Grid item xs={12}>
          <Breadcrumbs separator="›" arial-label="Breadcrumb">
            <Link color="inherit"  >
              My Sessions
            </Link>
            <Link color="inherit"  >
              {curVideo.title}
            </Link>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12}>
          <VideoAnnotationsColumn curVideo={curVideo}/>
        </Grid>
      </Grid>
    )
  }
};

export default withStyles(styles)(CoachSessions);