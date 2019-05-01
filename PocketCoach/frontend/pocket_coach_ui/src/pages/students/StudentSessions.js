import React, {Component} from 'react';
import { Typography, Grid, Card, Link,CardHeader} from '@material-ui/core';
import {Breadcrumbs} from '@material-ui/lab';
import {PlayerAnnotationController} from "../../components";
import { withStyles } from '@material-ui/core/styles';
import VideoStore from "../../stores/videos/VideoStore";
import StudentStore from "../../stores/students/StudentStore";

const styles = {
  root: {
    flexGrow: 1,
  },
};


class StudentSessions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentId: parseInt(props.match.params.studentId),
      curVideoId: parseInt(props.match.params.videoId),
    }
  };

  render() {
    const {studentId, curVideoId} = this.state;
    const curStudent = StudentStore.getStudentDetailsById(studentId)
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
          <PlayerAnnotationController curCoach={null} curStudent={curStudent} curVideo={curVideo}/>
        </Grid>
      </Grid>
    )
  }
};

export default withStyles(styles)(StudentSessions);