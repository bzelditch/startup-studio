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

class StudentProfile extends React.Component {
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
              Student Profile
            </Link>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={8}>
          <StudentProfileLeftPane/>
        </Grid>
        <Grid item xs={4}>
          <StudentProfileRightPane/>
        </Grid>
      </Grid>
    )
  }
};

export default withStyles(styles)(StudentProfile);














/*export default props => (
  <Typography variant="h1">
    Student Profile
  </Typography>
);*/
