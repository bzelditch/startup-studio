import React from 'react';
import { Typography, Grid, Card, Link,CardHeader,Toolbar} from '@material-ui/core';
import {Breadcrumbs} from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';
import {StudentProfileLeftPane} from '../../components/';
import StudentStore from "../../stores/students/StudentStore";


const styles = {
  root: {
    flexGrow: 1,
  },
};

class StudentProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: parseInt(props.match.params.studentId),
    }
  };

  render() {
    const { studentId } = this.state;
    const { classes } = this.props;
    const curStudent = StudentStore.getStudentDetailsById(studentId);

    return (
      <Grid container spacing={24} className={classes.root}>
        <Grid item xs={12}>
          <Breadcrumbs separator="›" arial-label="Breadcrumb">
            <Link color="inherit"  >
              Profile
            </Link>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12}>
          <StudentProfileLeftPane {...this.props} userName={curStudent.firstName + " " + curStudent.lastName}
            userHeadshot={curStudent.profileImage} userInformation={curStudent.studentInformation}/>
        </Grid>
      </Grid>
    )
  }
};

export default withStyles(styles)(StudentProfile);