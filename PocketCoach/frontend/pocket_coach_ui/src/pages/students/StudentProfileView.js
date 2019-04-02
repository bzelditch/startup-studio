import React, { Component, Fragment } from 'react';
import {Header, StudentProfileTabs} from "../../components";
import {StudentProfile, FindCoaches, MySessions} from "../";
import { withStyles } from '@material-ui/core/styles';

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

class StudentProfileView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStudentTab: "Profile",
      studentTabs: ["Profile", "Find Coaches", "My Sessions"],
    }
  };

  handleStudentTabSelected = tab => {
    this.setState({
      selectedStudentTab: tab,
    })
  }

  getStudentTabPage(tab) {
    switch (tab) {
      case 'Profile':
        return <StudentProfile/>
      case 'Find Coaches':
        return <FindCoaches/>
      case 'My Sessions':
        return <MySessions/>
    }
  }

  render() {
    const {studentTabs, selectedStudentTab} = this.state
    const { classes } = this.props;

    return (
      <Fragment >
        <Header/>
        <StudentProfileTabs
          studentTabs={studentTabs}
          selectedStudentTab={selectedStudentTab}
          onSelect={this.handleStudentTabSelected}
        />
        <div className={classes.layout}>
          <div className={classes.appBarSpacer} />
          {this.getStudentTabPage(selectedStudentTab)}
        </div>
      </Fragment>
    )
  }
};

export default withStyles(styles)(StudentProfileView);
