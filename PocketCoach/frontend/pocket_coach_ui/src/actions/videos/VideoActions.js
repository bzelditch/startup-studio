import * as VideoActionConstants from './VideoActionConstants'
import distpatcher from "../../dispatcher"

export function chooseVideoAction() {
  distpatcher.dispatch({
    type: VideoActionConstants.CHOOSE_VIDEO,
  });
}

export function uploadVideoAction(video) {
    distpatcher.dispatch({
      type: VideoActionConstants.UPLOAD_VIDEO,
      video: video
    });
}