import React from 'react';
import { Typography, Grid, Card, Link,CardHeader,Toolbar} from '@material-ui/core';
import {Breadcrumbs} from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';
import {StudentProfileLeftPane, StudentProfileRightPane} from '../../components/';
import CoachProfileLeftPane from './CoachProfileLeftPane';


const styles = {
  root: {
    flexGrow: 1,
  },
};

const coaches = [
  {
    coachId: 1,
    coachName: "Julia Crenshaw",
    coachHeadshot: require('../../static/images/gabi.jpg'),
    coachInformation: {
        coachSpecialty: "Startup Pitches",
        coachResponseTime: "24 Hours",
        workedAt: "BoxGroup, Union Square Ventures"
    },
    coachVideos: [],
    /* Maybe add an additional field for the student's projects */
  },
  {
    coachId: 2,
    coachName: "Milton Hinton",
    coachHeadshot: require('../../static/images/gabi.jpg'),
    coachInformation: {
        coachSpecialty: "Acting, Delivery Skills",
        coachResponseTime: "48 Hours",
        workedAt: "Harvard University"
    },
    coachVideos: [],
    /* Maybe add an additional field for the student's projects */
  },
  {
    coachId: 3,
    coachName: "Gigi Rosenberg",
    coachHeadshot: require('../../static/images/gabi.jpg'),
    coachInformation: {
        coachSpecialty: "Media Presentations",
        coachResponseTime: "1 Week",
        workedAt: "Intellitech, TedX"
    },
    coachVideos: [],
    /* Maybe add an additional field for the student's projects */
  }
];

class CoachProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={24} className={classes.root}>
        <Grid item xs={12}>
          <Breadcrumbs separator="›" arial-label="Breadcrumb">
            <Link color="inherit"  >
              Here Are Some Recommended Coaches for You
            </Link>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12}>
          <CoachProfileLeftPane userName={coaches[0].coachName}
            userHeadshot={coaches[0].coachHeadshot} userInformation={coaches[0].coachInformation}/>
        </Grid>
        <Grid item xs={12}>
          <CoachProfileLeftPane userName={coaches[1].coachName}
            userHeadshot={coaches[1].coachHeadshot} userInformation={coaches[1].coachInformation}/>
        </Grid>
        <Grid item xs={12}>
          <CoachProfileLeftPane userName={coaches[2].coachName}
            userHeadshot={coaches[2].coachHeadshot} userInformation={coaches[2].coachInformation}/>
        </Grid>
      </Grid>
    )
  }
};

export default withStyles(styles)(CoachProfile);
