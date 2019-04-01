import React, { Component, Fragment } from 'react';
import {CoachProfile, CoachSessions} from "../";
import { withStyles } from '@material-ui/core/styles';
import {Link, Route, Switch} from 'react-router-dom'
import {Paper, Tab, Tabs} from "@material-ui/core";

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


function LinkTab(props) {
  return <Tab component={Link} onClick={event => event.preventDefault()} {...props} />;
}


function createTabObject(name, href) {
  return {
    name: name,
    href: href,
  }
};

class CoachProfileView extends Component {
  constructor(props) {
    super(props);
    console.log("CoachProfileView")
    console.log(props)
    this.state = {
      coachTabs: [createTabObject("Profile",  "/"), createTabObject("My Sessions",  "/sessions")],
    }
  };

  render() {
    const {coachTabs} = this.state
    const { classes, match, location} = this.props;
    console.log(this.props)
    return (
      <Fragment >

        <Paper >
          <Tabs
            value={location.pathname}
            indicatorColor="primary"
            textColor="primary"
            >
            {coachTabs.map(tab =>
              <Tab label={tab.name} value={tab.href} component={Link} to={tab.href} {...this.props}/>
            )}
          </Tabs>
        </Paper>

        <div className={classes.layout}>
          <div className={classes.appBarSpacer} />
          <Switch>
            <Route path="/sessions" component={CoachSessions} />
            <Route path="/" component={CoachProfile} />
          </Switch>

        </div>
      </Fragment>
    )
  }
};

export default withStyles(styles)(CoachProfileView);
