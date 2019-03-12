import React from 'react';
import { Typography, Grid, Card, Link,CardHeader,Toolbar} from '@material-ui/core';
import {Breadcrumbs} from '@material-ui/lab';
import {VideoAnnotationsColumn, PlaylistPanel, RecommendedCoachesPanel} from "../../components";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
};

export default withStyles(styles)(props => {
  return (
    <Grid container spacing={24} style={styles.root}>
      <Grid item xs={12}>
        <Breadcrumbs separator="›" arial-label="Breadcrumb">
          <Link color="inherit"  >
            Playlists
          </Link>
          <Link color="inherit"  >
            Startup Studio Pitch
          </Link>
          <Link color="inherit"  >
            Second try!
          </Link>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={8}>
        <VideoAnnotationsColumn/>
      </Grid>
      <Grid item xs={4}>
        <PlaylistPanel/>
        <br/>
        <RecommendedCoachesPanel/>
      </Grid>
    </Grid>
  );
});