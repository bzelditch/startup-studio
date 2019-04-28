import React, { Component, Fragment } from 'react';
import {Header, StudentProfileTabs} from "../../components";
import {StudentProfile, FindCoaches, StudentSessions} from "../";
import { withStyles } from '@material-ui/core/styles';
import {Paper, Tab, Tabs} from "@material-ui/core";
import {Link, Route, Switch, Redirect} from "react-router-dom";

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

class StudentProfileView extends Component {
  constructor(props) {
    super(props);
    console.log("StudentProfileView")
    console.log(props)
    this.state = {
      tabs: [createTabObject("Profile",  props.match.url ),
        createTabObject("Find Coaches",  props.match.url+"/findcoaches"),
        createTabObject("My Sessions",  props.match.url+"/sessions")],
    }
  };


  render() {
    const { tabs } = this.state;
    const { classes, location} = this.props;

    return (
      <Fragment >
        <Header/>
        <Paper >
          <Tabs
            value={location.pathname}
            indicatorColor="primary"
            textColor="primary"
          >
            {tabs.map(tab =>
              <Tab className={classes.tabs} key={tab.name} label={tab.name} value={tab.href} component={Link} to={tab.href} {...this.props}/>
            )}
          </Tabs>
        </Paper>


        <div className={classes.layout}>
        <div className={classes.appBarSpacer} />
        <Switch>
          <Route path="/student/:studentId/findcoaches" component={FindCoaches} />
          <Route path="/student/:studentId/sessions" component={StudentSessions} />
          <Route path="/student/:studentId" component={StudentProfile} />
        </Switch>

      </div>
      </Fragment>
    )
  }
};

export default withStyles(styles)(StudentProfileView);
