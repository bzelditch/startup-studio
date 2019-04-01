import {EventEmitter} from "events";
import dispatcher from "../../dispatcher"
import * as StudentProfileActions from '../../actions/students/StudentProfileActions'

class StudentProfilesStore extends EventEmitter {
    constructor () {
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
            case StudentProfileActions.CREATE_STUDENT_PROFILE:
                this.createStudentProfile(action.profile)
        }
    }

}

const studentProfilesStore = new StudentProfilesStore;
dispatcher.register(studentProfilesStore.handleActions.bind(studentProfilesStore));
export default studentProfilesStore;