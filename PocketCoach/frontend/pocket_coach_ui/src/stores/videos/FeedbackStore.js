import {EventEmitter} from "events";
import dispatcher from "../../dispatcher"
import * as VideoActionConstants from '../../actions/videos/VideoActionConstants'

function getCurrentDatePlusDays(days) {
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + days);
  return currentDate.toLocaleDateString('en-US', options);
}

class FeedbackStore extends EventEmitter {
  constructor() {
    super();

    this.feedbackDatabase = [
      /*{
        feedbackId: 1,
        videoId: 2,
        coachId: "Gigi Rosenburg",
        createTimestamp: getCurrentDatePlusDays(-3),
        updateTimestamp: getCurrentDatePlusDays(-3),
        commentChildren: [],
        keyNextSteps: "",
      }*/

    ];

    this.nextFeedbackId = this.feedbackDatabase.length + 1;
  }

  getAllFeedbackForVideoId(videoId) {
    return this.feedbackDatabase.filter(f => f.videoId === videoId)
  }

  createFeedback(feedback) {
    const feedbackId = this.nextFeedbackId;
    const currentTimestamp = new Date();

    this.feedbackDatabase.push({
      ...feedback,
      feedbackId: feedbackId,
      createTimestamp: currentTimestamp.toLocaleDateString('en-US'),
      updateTimestamp: currentTimestamp.toLocaleDateString('en-US'),
    })

    this.nextFeedbackId = this.feedbackDatabase.length + 1

    this.emit("change")
  }

  handleActions(action) {
    console.log("feedback handleActions")
    switch(action.type) {
      case VideoActionConstants.CREATE_FEEDBACK:
        this.createFeedback(action.feedback)
    }
  }
}

const feedbackStore = new FeedbackStore;
dispatcher.register(feedbackStore.handleActions.bind(feedbackStore));
export default feedbackStore;

