import {EventEmitter} from "events";
import dispatcher from "../../dispatcher";
import * as StudentProfileActions from '../../actions/students/StudentProfileActions';
import randomMaterialColor from 'random-material-color'
import * as StudentProfileConstants from '../../actions/students/StudentProfileConstants';
import {Avatar} from "@material-ui/core";
import React from "react";

class StudentStore extends EventEmitter {
    constructor (props) {
        super(props);
        this.studentDatabase = [
            {
              studentId: 1,
              firstName: "Gabi",
              lastName: "Zandi",
              avatarColor: randomMaterialColor.getColor({text: "Gabi Zandi"}),
              profileImage: require('../../static/images/gabi.jpg'),
              studentInformation: {
                studentIntro: "I'm an MBA student at Cornell Tech looking for Product Managment roles.",
                studentGoals: "My goals are to improve my pacing and projection."
              },
              studentVideos: [],
              studentCoaches: [],
              /* Maybe add an additional field for the student's projects */
            }
        ];
        this.nextStudentId = 2;
    }

    getAll() {
        return this.studentDatabase;
    }

    getStudentDetailsById(studentId) {
        const student = this.studentDatabase.find(s => s.studentId === studentId);
        return student;
    }

    updateStudentProfile(studentId, videoId) {
        var profile = this.getStudentDetailsById(studentId);
        profile.studentVideos.push(videoId);
        this.emit("studentProfileUpdated");
    }

  getAvatarById(id) {
    const details = this.getStudentDetailsById(id)
    const avatarStyle = {
      backgroundColor: details.avatarColor,
      borderStyle: "solid",
      borderWidth: "3px",
      borderColor: details.avatarColor,
    };

    if (details.profileImage) {
      return <Avatar src={details.profileImage} style={avatarStyle}/>
    }


    return <Avatar style={avatarStyle}>{details.firstName.charAt(0)}</Avatar>
  }

    /* TBD on how to handle this. Not sure if we should pass in inputs differently */
    createStudentProfile(profile) {
        const studentId = this.nextStudentId;
        this.nextStudentId++;
        this.studentDatabase.push({
            ...profile,
            studentId: studentId
        });
        this.emit("newStudentProfileAdded")
    }

    
    handleActions(action) {
        switch(action.type) {
            case StudentProfileConstants.CREATE_STUDENT_PROFILE:
                this.createStudentProfile(action.profile)
            case StudentProfileConstants.UPDATE_STUDENT_PROFILE:
                this.updateStudentProfile(action.studentId, action.videoId)
        }
    }
}

const studentStore = new StudentStore;
dispatcher.register(studentStore.handleActions.bind(studentStore));
export default studentStore;