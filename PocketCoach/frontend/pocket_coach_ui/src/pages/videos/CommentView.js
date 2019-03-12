import React, { Component, Fragment } from 'react';
import { CommentCard, NewComment, VideoAnnotationsColumn } from '../../components';
import {StudentProfileTabs} from "../../components";
import {Playlists, ProgressTracker, StudentProfile,StudentVideos} from "../";
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

class CommentView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStudentTab: "Profile",
      studentTabs: ["Profile", "Playlists", "Videos", "Progress"],
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
      case 'Playlists':
        return <Playlists/>
      case 'Videos':
        return <StudentVideos />
      case 'Progress':
        return <ProgressTracker />
    }
  }

  render() {
    const {studentTabs, selectedStudentTab} = this.state
    const { classes } = this.props;

    return (
      <Fragment >
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

export default withStyles(styles)(CommentView);
