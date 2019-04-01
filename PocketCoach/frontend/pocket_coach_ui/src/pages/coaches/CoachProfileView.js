import React, { Component, Fragment } from 'react';
import {CoachProfileTabsNav} from "../../components";
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
      selectedCoachTab: "Profile",
      coachTabs: [createTabObject("Profile",  "/profile"), createTabObject("My Sessions",  "/sessions")],
    }
  };



  handleCoachTabSelected = tab => {
    this.setState({
      selectedCoachTab: tab.name,
    })
  }

  handleCallToRouter = (value) => {
    this.props.history.push(value);
  }


  render() {
    const {coachTabs, selectedCoachTab} = this.state
    const { classes, match, location} = this.props;
    console.log(this.props)
    return (
      <Fragment >
        {/*<CoachProfileTabsNav
          {...this.props}
          studentTabs={coachTabs}
          selectedStudentTab={selectedCoachTab}
          onSelect={this.handleCoachTabSelected}
        />*/}

        <Paper > {/*className={classes.root}*/}
          <Fragment>
            <Tabs value={location.pathname}>
              <Tab label="Item One" value="/" component={Link} to="/" />
              <Tab label="Item Two" value="/tab2" component={Link} to="/tab2" />
            </Tabs>
            <Switch>
              <Route path="/tab2" component={CoachSessions} />
              <Route path="/" component={CoachProfile} />
            </Switch>
          </Fragment>

          <Tabs
            value={location.pathname}
            onChange={this.handleCallToRouter}
            indicatorColor="primary"
            textColor="primary"
          >
            {coachTabs.map(tab =>
              <LinkTab key={tab.name} component={Link} label={tab.name} to={tab.href} value={tab.href}/>
            )}
          </Tabs>
        </Paper>

        <div className={classes.layout}>
          <div className={classes.appBarSpacer} />
          <h1>Welcome Coach {match.params.id}</h1>
          <Switch>
            <Route exact path='/profile' component={CoachProfile} />
            <Route exact path='/sessions' component={CoachSessions} />
          </Switch>
        </div>
      </Fragment>
    )
  }
};

export default withStyles(styles)(CoachProfileView);
