import React from 'react';
import { Typography, Grid, Card, Link,CardHeader,Toolbar} from '@material-ui/core';
import {Breadcrumbs} from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';
import {CoachProfileInformation} from '../../components/';
import CoachStore from "../../stores/coaches/CoachStore";

const styles = {
  root: {
    flexGrow: 1,
  },
};

class CoachProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coachId: parseInt(props.match.params.coachId),
    }
  };

  render() {
    const { coachId } = this.state;
    const { classes } = this.props;
    const curCoach = CoachStore.getCoachDetailsById(coachId);

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
          <CoachProfileInformation {...this.props} curCoach={curCoach}/>
        </Grid>
      </Grid>
    )
  }
};

export default withStyles(styles)(CoachProfile);