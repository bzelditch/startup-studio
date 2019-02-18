import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import VideoAnnotationsColumn from "../../components/videos/VideoAnnotationsColumn";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    margin:10,
  }
};

export default withStyles(styles)(props => {
  return (
    <Grid container spacing={24} style={styles.root}>
      <Grid item xs={8}>
        <VideoAnnotationsColumn/>
      </Grid>
      <Grid item xs={4}>
        <Paper style={styles.paper}>
          Panel column
        </Paper>
      </Grid>
    </Grid>
  );
});