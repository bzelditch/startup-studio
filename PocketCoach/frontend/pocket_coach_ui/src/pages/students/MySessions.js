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

const videoLinks = ['02yv-Xf77SQ', 'fh28oGbPmr4',
'GXoYll6Wbe0'];

const coaches = [
  {
    coachId: 1,
    coachName: "Julia Crenshaw",
    coachHeadshot: require('./JuliaCrenshaw.jpeg'),
    coachInformation: {
        coachSpecialty: "Startup Pitches",
        coachResponseTime: "24 Hours",
        workedAt: "BoxGroup, Union Square Ventures"
    },
    videoLink: '02yv-Xf77SQ',
    /* Maybe add an additional field for the student's projects */
  },
  {
    coachId: 2,
    coachName: "Milton Hinton",
    coachHeadshot: require('./MiltonHinton.jpeg'),
    coachInformation: {
        coachSpecialty: "Acting, Delivery Skills",
        coachResponseTime: "24 Hours",
        workedAt: "Harvard University"
    },
    videoLink: 'fh28oGbPmr4',
    /* Maybe add an additional field for the student's projects */
  },
  {
    coachId: 3,
    coachName: "Gigi Rosenberg",
    coachHeadshot: require('./GigiRosenberg.jpg'),
    coachInformation: {
        coachSpecialty: "Media Presentations",
        coachResponseTime: "24 Hours",
        workedAt: "Intellitech, TedX"
    },
    videoLink: 'GXoYll6Wbe0',
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
    console.log(coaches)
    return (
      <Grid container spacing={24} className={classes.root}>
        <Grid item xs={12}>
          <Breadcrumbs separator="›" arial-label="Breadcrumb">
            <Typography variant = "h5">
              Here Are Some Recommended Coaches for You...
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12}>
          <CoachProfileLeftPane userName={coaches[0].coachName}
            userHeadshot={coaches[0].coachHeadshot} userInformation={coaches[0].coachInformation}
            finalVideoLink={coaches[0].videoLink}/>
        </Grid>
        <Grid item xs={12}>
          <CoachProfileLeftPane userName={coaches[1].coachName}
            userHeadshot={coaches[1].coachHeadshot} userInformation={coaches[1].coachInformation}
            finalVideoLink={coaches[1].videoLink}/>
        </Grid>
        <Grid item xs={12}>
          <CoachProfileLeftPane userName={coaches[2].coachName}
            userHeadshot={coaches[2].coachHeadshot} userInformation={coaches[2].coachInformation}
            finalVideoLink={coaches[2].videoLink}/>
        </Grid>
      </Grid>
    )
  }
};

export default withStyles(styles)(CoachProfile);
