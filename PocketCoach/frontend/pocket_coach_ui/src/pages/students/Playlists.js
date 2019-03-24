import React, {Component} from 'react';
import { Typography, Grid, Card, Link,CardHeader,Toolbar} from '@material-ui/core';
import {Breadcrumbs} from '@material-ui/lab';
import {VideoAnnotationsColumn, PlaylistPanel, RecommendedCoachesPanel} from "../../components";
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
    title: "First try!",
    icon: 1,
    createTimestamp: getCurrentDatePlusDays(-13),
    numFeedback: 7,
    videoPath: require('../../static/videos/attempt1.m4v'),
    goals: "Please give me feedback on my delivery skills and the presentation conent.  I am preparing to pitch to a VC."
  },
  {
    videoId: 2,
    title: "Second try!",
    icon: 2,
    createTimestamp: getCurrentDatePlusDays(-3),
    numFeedback: 3,
    videoPath: require('../../static/videos/attempt2.m4v'),
    goals: "Please give me feedback on my delivery skills and the presentation conent.  I am preparing to pitch to a VC."
  },
  {
    videoId: 3,
    title: "Third try!",
    icon: 3,
    createTimestamp: getCurrentDatePlusDays(0),
    numFeedback: 2,
    videoPath: require('../../static/videos/attempt3.m4v'),
    goals: "Please give me feedback on my delivery skills, especially presence and pacing.  I am preparing to pitch to a VC."
  },
  {
    videoId: 4,
    title: "Rocky Studio!",
    icon: 1,
    createTimestamp: getCurrentDatePlusDays(-40),
    numFeedback: 4,
    videoPath: require('../../static/videos/rocky_video2.mp4'),
    goals: "Please give me feedback on my delivery skills and the presentation conent.  I am preparing to pitch to a VC."
  },
];

const playlists = [
  {
    playlistId: 1,
    title: "Q1/Q2 Presentation!",
    icon: 1,
    createTimestamp: getCurrentDatePlusDays(-13),
    videos: [1,2,3],
  },
  {
    playlistId: 2,
    title: "Startup Studio Application!",
    icon: 2,
    createTimestamp: getCurrentDatePlusDays(-3),
    videos: [4],
  },
];


class VideoDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlists: playlists,
      videos: videos,
      curPlaylistId: 1,
      curVideoIdxInPlaylist:2, //0-indexed
    }
  };

  getPlaylistDetails(playlistId) {
    const playlist = this.state.playlists.find(p => p.playlistId === playlistId );
    playlist.videos = playlist.videos.map(videoId => this.getVideoDetails(videoId))
    return playlist;
  }

  getVideoDetails(videoId) {
    return this.state.videos.find(v => v.videoId === videoId );
  }

  render() {
    const {curPlaylistId, curVideoIdxInPlaylist} = this.state;
    const playlist =  this.getPlaylistDetails(curPlaylistId);
    const curVideo = playlist.videos[curVideoIdxInPlaylist];
    const { classes } = this.props;

    return (
      <Grid container spacing={24} className={classes.root}>
        <Grid item xs={12}>
          <Breadcrumbs separator="›" arial-label="Breadcrumb">
            <Link color="inherit"  >
              Playlists
            </Link>
            <Link color="inherit"  >
              {playlist.title}
            </Link>
            <Link color="inherit"  >
              {curVideo.title}
            </Link>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={8}>
          <VideoAnnotationsColumn curVideo={curVideo}/>
        </Grid>
        <Grid item xs={4}>
          <PlaylistPanel playlist={playlist} curVideo={curVideo}/>
          <br/>
          <RecommendedCoachesPanel/>
        </Grid>
      </Grid>
    )
  }
};

export default withStyles(styles)(VideoDetailsPage);