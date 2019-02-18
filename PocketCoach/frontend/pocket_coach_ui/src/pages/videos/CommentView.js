import React, { Component, Fragment } from 'react';
import { CommentCard, NewComment, VideoAnnotationsColumn } from '../../components';
import {StudentProfileTabs} from "../../components";
import {Playlists, ProgressTracker, StudentProfile,StudentVideos} from "../";

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
    return (
      <Fragment >
        <StudentProfileTabs
          studentTabs={studentTabs}
          selectedStudentTab={selectedStudentTab}
          onSelect={this.handleStudentTabSelected}
        />
        {this.getStudentTabPage(selectedStudentTab)}
      </Fragment>
    )
  }
};

export default CommentView;
