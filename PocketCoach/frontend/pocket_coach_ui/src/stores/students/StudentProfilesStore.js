import {EventEmitter} from "events";
import dispatcher from "../../dispatcher";
import * as StudentProfileActions from '../../actions/students/StudentProfileActions';
import * as StudentProfileConstants from '../../actions/students/StudentProfileConstants';

class StudentProfilesStore extends EventEmitter {
    constructor (props) {
        super(props);
        this.studentProfiles = [
            {
                studentId: 1,
                studentName: "Gabi Zandi",
                studentInformation: {
                    studentIntro: "",
                    studentGoals: ""
                },
                studentVideos: [],
                studentCoaches: []
                /* Maybe add an additional field for the student's projects */
            }
        ];
        this.nextStudentId = 2;
    }

    getAll() {
        return this.studentProfiles;
    }

    getStudentById(studentId) {
        var student = this.studentProfiles.find(s => s.studentId === studentId);
        return student;
    }

    updateStudentProfile(studentId, videoId) {
        var profile = this.getStudentById(studentId);
        profile.studentVideos.push(videoId);
        this.emit("studentProfileUpdated");
    }

    /* TBD on how to handle this. Not sure if we should pass in inputs differently */
    createStudentProfile(profile) {
        const studentId = this.nextStudentId;
        this.nextStudentId++;
        this.studentProfiles.push({
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

const studentProfilesStore = new StudentProfilesStore;
dispatcher.register(studentProfilesStore.handleActions.bind(studentProfilesStore));
export default studentProfilesStore;