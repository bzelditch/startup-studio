import React from 'react';
import { Typography, Grid, Card, Link,CardHeader,Toolbar} from '@material-ui/core';
import {Breadcrumbs} from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';
import {StudentProfileLeftPane, StudentProfileRightPane} from '../../components/';


const styles = {
  root: {
    flexGrow: 1,
  },
};

const students = [
  {
    studentId: 1,
    studentName: "Gabi Zandi",
    studentHeadshot: require('../../static/images/gabi.jpg'),
    studentInformation: {
        studentIntro: "I'm an MBA student at Cornell Tech looking for Product Managment roles.",
        studentGoals: "My goals are to improve my pacing and projection."
    },
    studentVideos: [],
    studentCoaches: []
    /* Maybe add an additional field for the student's projects */
  }
];

class StudentProfile extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={24} className={classes.root}>
        <Grid item xs={12}>
          <Breadcrumbs separator="›" arial-label="Breadcrumb">
            <Link color="inherit"  >
              Student Profile
            </Link>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12}>
          <StudentProfileLeftPane {...this.props} userName={students[0].studentName}
            userHeadshot={students[0].studentHeadshot} userInformation={students[0].studentInformation}/>
        </Grid>
      </Grid>
    )
  }
};

export default withStyles(styles)(StudentProfile);