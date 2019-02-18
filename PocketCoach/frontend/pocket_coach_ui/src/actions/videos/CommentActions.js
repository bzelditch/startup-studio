import * as VideoActionConstants from './VideoActionConstants'
import distpatcher from "../../dispatcher"

export function createAnnotationAction(annotation) {
  distpatcher.dispatch({
    type: VideoActionConstants.CREATE_ANNOTATION,
    annotation: annotation,
  });
}