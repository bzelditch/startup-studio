import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ProductHeroLayout from './ProductHeroLayout';
import {Typography, Button, Link} from '@material-ui/core';

const backgroundImage =
  require('../../static/images/audience.jpg');

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    opacity: 0.4,
  },
  title: {
    fontWeight:500,
    color:theme.palette.primary.dark,
  },

  more: {
    marginTop: theme.spacing.unit * 2,
    color:theme.palette.navBlack,
  },
  h5: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 10,
    },
  },

});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="" />
      <Typography color="primary" align="center" variant="h2" marked="center" className={classes.title}>
        Perfect your pitch with PocketCoach
      </Typography>
      <Typography variant="h5"  className={classes.more}>
        Find a public speaking expert and start improving today
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);