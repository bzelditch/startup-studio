import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Typography, Grid, Link} from '@material-ui/core';
import LayoutBody from './LayoutBody';
import VideocamOutlined from '@material-ui/icons/VideocamOutlined';
import FindInPageOutlined from '@material-ui/icons/FindInPageOutlined';
import TrendingUpOutlined from '@material-ui/icons/TrendingUpOutlined';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.default,
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 15,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 5}px`,
  },
  title: {
    marginBottom: theme.spacing.unit * 14,
  },
  number: {
    fontSize: 30,
    color: theme.palette.primary.light,
    fontWeight: 500,
  },
  image: {
    height: 55,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 80,
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Typography variant="h4" marked="center" className={classes.title} color="primary">
          How it works
        </Typography>
        <div>
          <Grid container spacing={30}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <VideocamOutlined className={classes.icon}/>
                <Typography variant="h5" align="center">
                  Upload video presentation.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <FindInPageOutlined className={classes.icon}/>
                <Typography variant="h5" align="center">
                  Find a public speaking expert.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <TrendingUpOutlined className={classes.icon}/>
                <Typography variant="h5" align="center">
                  Improve and gain confidence.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>

      </LayoutBody>
    </section>
  );
}

export default withStyles(styles)(ProductHowItWorks);