import dispatcher from "../../dispatcher";
import * as StudentProfileConstants from './StudentProfileConstants';

export function createStudentProfileAction(profile) {
    dispatcher.dispatch({
        type: StudentProfileConstants.CREATE_STUDENT_PROFILE,
        profile: profile
    });
};

export function updateStudentProfileAction(studentId, videoId) {
    dispatcher.dispatch({
        type: StudentProfileConstants.UPDATE_STUDENT_PROFILE,
        studentId: studentId,
        videoId: videoId,
    });
}

