import React, {Component} from 'react';
import { Typography, Grid, Card, Link,CardHeader} from '@material-ui/core';
import {Breadcrumbs} from '@material-ui/lab';
import {VideoAnnotationsColumn} from "../../components";
import { withStyles } from '@material-ui/core/styles';
import VideoStore from "../../stores/videos/VideoStore";

const styles = {
  root: {
    flexGrow: 1,
  },
};


class CoachSessions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curVideoId:3,
    }
  };


  render() {
    const {curVideoId} = this.state;
    const curVideo = VideoStore.getVideoDetailsById(curVideoId);
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