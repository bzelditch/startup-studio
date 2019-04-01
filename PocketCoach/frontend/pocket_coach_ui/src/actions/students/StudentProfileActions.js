import dispatcher from "../../dispatcher"
import * as StudentProfileConstants from './StudentProfileConstants'

export default createStudentProfileAction(profile) {
    dispatcher.dispatch({
        type: StudentProfileConstants.CREATE_STUDENT_PROFILE,
        profile: profile
    });
}