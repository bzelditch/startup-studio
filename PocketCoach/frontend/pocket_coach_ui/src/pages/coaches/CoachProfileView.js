import React, { Component, Fragment } from 'react';
import {CoachProfileTabs} from "../../components";
import {CoachProfile, CoachSessions} from "../";
import { withStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom'
import {Paper} from "@material-ui/core";

const styles = theme => ({
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
})

function createTabObject(name, href) {
  return {
    name: name,
    href: href,
  }
};

class CoachProfileView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCoachTab: "Profile",
      coachTabs: [createTabObject("Profile", "profile"), createTabObject("My Sessions", "sessions")],
    }
  };



  handleCoachTabSelected = tab => {
    this.setState({
      selectedCoachTab: tab.name,
    })
  }


  render() {
    const {coachTabs, selectedCoachTab} = this.state
    const { classes, match} = this.props;
    console.log(match)
    return (
      <Fragment >
        <CoachProfileTabs
          studentTabs={coachTabs}
          selectedStudentTab={selectedCoachTab}
          onSelect={this.handleCoachTabSelected}
        />

        <div className={classes.layout}>
          <div className={classes.appBarSpacer} />
          <h1>Welcome Coach {match.params.id}</h1>
          <Switch>
            <Route exact path='/coach/:id/profile' component={CoachProfile} />
            <Route exact path='/coach/:id/sessions' component={CoachSessions} />
          </Switch>
        </div>
      </Fragment>
    )
  }
};

export default withStyles(styles)(CoachProfileView);
