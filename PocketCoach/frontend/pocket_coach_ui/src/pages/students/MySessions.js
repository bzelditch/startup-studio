import React from 'react';
import { Typography, Grid, Card, Link,CardHeader,Toolbar} from '@material-ui/core';
import {Breadcrumbs} from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';
import CoachInformation from './CoachInformation';
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
      coaches: CoachStore.getAll(),
    }
  };

  componentWillMount() {
    CoachStore.on("change", () => {
      this.setState({
        coaches: CoachStore.getAll(),
      })
    })
  }

  render() {
    const { coaches } = this.state;
    const { classes } = this.props;

    return (
      <Grid container spacing={24} className={classes.root}>
        <Grid item xs={12}>
          <Breadcrumbs separator="›" arial-label="Breadcrumb">
            <Typography variant = "h5">
              Here Are Some Recommended Coaches for You...
            </Typography>
          </Breadcrumbs>
        </Grid>

        {coaches.map((coach) =>
          <Grid item xs={12}>
            <CoachInformation coach={coach}/>
          </Grid>
        )}

      </Grid>
    )
  }
};

export default withStyles(styles)(CoachProfile);
