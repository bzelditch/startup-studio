import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {HomepageHeader} from "../../components";
import ProductHero from "./ProductHero";
import ProductHowItWorks from "./ProductHowItWorks";

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  tabs: {
    height:80,
    fontSize: 20,
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 14,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

function createTabObject(name, href) {
  return {
    name: name,
    href: href,
  }
};


class Homepage extends Component {
  constructor(props) {
    super(props);
    console.log("CoachProfileView")
    console.log(props)
    const demoVideoId = 3
    this.state = {
      coachTabs: [createTabObject("Profile",  props.match.url ), createTabObject("My Sessions",  props.match.url+"/sessions/"+demoVideoId)],
    }
  };

  render() {
    const {coachTabs} = this.state
    const { classes, location} = this.props;
    const img = require('../../static/images/contemplative-reptile.jpg')
    return (
      <Fragment >

        <HomepageHeader/>

        <ProductHero />

        <ProductHowItWorks/>

      </Fragment>
    )
  }
};

export default withStyles(styles)(Homepage);