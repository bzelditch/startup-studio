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

    this.commentDatabase = [
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
        videos: [
          {
            description: "GRU RNN",
            service: "youtube",
            url: "https://www.youtube.com/watch?v=xSCy3q2ts44&list=PL1w8k37X_6L_s4ncq-swTBvKDWnRSrinI&index=9",
            youtubeId: "xSCy3q2ts44",
          }
          ],
      },
      {
        commentId: 3,
        videoId: 2,
        studentId: null,
        coachId: 1,
        createTimestamp: getCurrentDatePlusDays(-3),
        updateTimestamp: getCurrentDatePlusDays(-1),
        videoTimestamp: 28.553137 ,
        isDraft: true,
        commentChildren: [],

        text: "Great job explaining the business strategy!",
        //images: [require('../../static/images/contemplative-reptile.jpg')],
        images: [],
        videos: [],
      },

    ];

    this.getVideoId = require('get-video-id');
    this.nextCommentId = this.commentDatabase.length + 1
  }

  sortCommentsBy(field) {

  }

  createAnnotationVideoObject(videoUrl, videoDescription, youtubeId, service) {
    return {
      url: videoUrl,
      youtubeId: youtubeId,
      service: service,
      description: videoDescription,
    }
  }

  getAllCommentsForVideoId(videoId) {
    return this.commentDatabase.filter(c => c.videoId === videoId)
  }

  createAnnotation(annotation) {
    console.log("createAnnotation")
    console.log(annotation)
    const commentId = this.nextCommentId;
    const currentTimestamp = new Date();

    this.commentDatabase.push({
      ...annotation,
      commentId: commentId,
      createTimestamp: currentTimestamp.toLocaleDateString('en-US'),
      updateTimestamp: currentTimestamp.toLocaleDateString('en-US'),
    })

    this.nextCommentId = this.commentDatabase.length + 1

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

