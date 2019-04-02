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

class CommentStore extends EventEmitter {
  constructor() {
    super();

    this.comments = [
      {
        commentId: 1,
        videoId: 3,
        studentId: null,
        coachId: 1,
        createTimestamp: getCurrentDatePlusDays(-3),
        updateTimestamp: getCurrentDatePlusDays(-3),
        videoTimestamp:  2.673682,
        isDraft: true,
        commentChildren: [],

        text: "Next time you take a video of the presentation, it'd be better to stand up. There"
            + " are many aspects of presenting, such as gestures, that have to be practiced.",
        //images: [require('../../static/images/paella.jpg'), require('../../static/images/contemplative-reptile.jpg')],
        images: [],
        videos: [],
      },
      {
        commentId: 2,
        videoId: 3,
        studentId: null,
        coachId: 1,
        createTimestamp: getCurrentDatePlusDays(-3),
        updateTimestamp: getCurrentDatePlusDays(-1),
        videoTimestamp: 25.553137 ,
        isDraft: true,
        commentChildren: [],

        text: "Great job explaining the value of the product here!  However, it would be more effective to"
          + " lead the product narrative with a user story and then go into more detail about what the"
          + " product is.",
        //images: [require('../../static/images/contemplative-reptile.jpg')],
        images: [],
        videos: [],
      },
    ];

    this.nextCommentId = this.comments.length + 1
  }

  getAll() {
    return this.comments;
  }

  createAnnotation(annotation) {
    const commentId = this.nextCommentId;
    const currentTimestamp = new Date();

    this.comments.push({
      ...annotation,
      commentId: commentId,
      createTimestamp: currentTimestamp.toLocaleDateString('en-US'),
      updateTimestamp: currentTimestamp.toLocaleDateString('en-US'),
    })

    this.nextCommentId = this.comments.length + 1

    this.emit("change")
  }

  handleActions(action) {
    console.log("comments handleActions")
    switch(action.type) {
      case VideoActionConstants.CREATE_DRAFT_ANNOTATION:
        this.createAnnotation(action.annotation)
    }
  }
}

const commentStore = new CommentStore;
dispatcher.register(commentStore.handleActions.bind(commentStore));
export default commentStore;

