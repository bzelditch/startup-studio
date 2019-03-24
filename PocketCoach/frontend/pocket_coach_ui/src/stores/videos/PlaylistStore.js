import {EventEmitter} from "events";
import dispatcher from "../../dispatcher"
import * as VideoActionConstants from '../../actions/videos/VideoActionConstants'

class PlaylistsStore extends EventEmitter {
  constructor() {
    super();

    this.comments = [
      {
        commentId: 1,
        videoId: 1,
        studentId: 1,
        coachId: "Gigi Rosenburg",
        createTimestamp: getCurrentDatePlusDays(-3),
        updateTimestamp: getCurrentDatePlusDays(-3),
        videoTimestamp:  2.673682,
        commentContentId: 1,
        commentChildren: [],

        text: "Next time you take a video of the presentation, it'd be better to stand up. There"
          + " are many aspects of presenting, such as gestures, that have to be practiced.",
        //images: [require('../../static/images/paella.jpg'), require('../../static/images/contemplative-reptile.jpg')],
        images: [],
        videos: [],
      },
      {
        commentId: 2,
        videoId: 1,
        studentId: 1,
        coachId: "Gigi Rosenburg",
        createTimestamp: getCurrentDatePlusDays(-3),
        updateTimestamp: getCurrentDatePlusDays(-1),
        videoTimestamp: 25.553137 ,
        commentContentId: 1,
        commentChildren: [],

        text: "Great job explaining the value of the product here!  However, it would be more effective to"
          + " lead the product narrative with a user story and then go into more detail about what the"
          + " product is.",
        //images: [require('../../static/images/contemplative-reptile.jpg')],
        images: [],
        videos: [],
      },
    ];

    this.nextCommentId = 4
  }

  getAll() {
    return this.comments;
  }

  createAnnotation(annotation) {
    const commentId = this.nextCommentId;
    const currentTimestamp = new Date();
    this.nextCommentId++;
    this.comments.push({
      ...annotation,
      commentId: commentId,
      createTimestamp: currentTimestamp.toLocaleDateString('en-US'),
      updateTimestamp: currentTimestamp.toLocaleDateString('en-US'),
    })
    this.emit("change")
  }

  handleActions(action) {
    switch(action.type) {
      case VideoActionConstants.CREATE_ANNOTATION:
        this.createAnnotation(action.annotation)
    }
  }
}

const playlistsStore = new PlaylistsStore;
dispatcher.register(playlistsStore.handleActions.bind(playlistsStore));
export default playlistsStore;
