import * as VideoActionConstants from './VideoActionConstants'
import dispatcher from "../../dispatcher"

export function createDraftAnnotationAction(annotation) {
  dispatcher.dispatch({
    type: VideoActionConstants.CREATE_DRAFT_ANNOTATION,
    annotation: annotation,
  });
}

export function createFeedbackAction(feedback) {
  dispatcher.dispatch({
    type: VideoActionConstants.CREATE_FEEDBACK,
    feedback: feedback,
  });
}