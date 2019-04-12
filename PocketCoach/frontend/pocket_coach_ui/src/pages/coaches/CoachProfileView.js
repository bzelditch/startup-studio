import React, { Component, Fragment } from 'react';
import {CoachProfile, CoachSessions} from "../";
import { withStyles } from '@material-ui/core/styles';
import {Link, Redirect, Route, Switch} from 'react-router-dom'
import {Paper, Tab, Tabs} from "@material-ui/core";
import {CoachHeader} from "../../components";

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
  tabs: {
    height:80,
    fontSize: 20,
  }
});

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
    const demoVideoId = 3
    this.state = {
      coachTabs: [createTabObject("Profile",  props.match.url ), createTabObject("My Sessions",  props.match.url+"/sessions/"+demoVideoId)],
    }
  };

  render() {
    const {coachTabs} = this.state
    const { classes, location} = this.props;

    return (
      <Fragment >
        <CoachHeader {...this.props}/>
        <Paper >
          <Tabs
            value={location.pathname}
            indicatorColor="primary"
            textColor="primary"
            tabItemContainerStyle={{}}
            >
            {coachTabs.map(tab =>
              <Tab className={classes.tabs} key={tab.name} label={tab.name} value={tab.href} component={Link} to={tab.href} {...this.props}/>
            )}
          </Tabs>
        </Paper>

        <div className={classes.layout}>
          <div className={classes.appBarSpacer} />
          <Switch>
            <Route path="/coach/:coachId/sessions/:videoId" component={CoachSessions} />
            <Route path="/coach/:coachId" component={CoachProfile} />
          </Switch>

        </div>
      </Fragment>
    )
  }
};

export default withStyles(styles)(CoachProfileView);
