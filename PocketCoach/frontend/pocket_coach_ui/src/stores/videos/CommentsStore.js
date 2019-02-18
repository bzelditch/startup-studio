import {EventEmitter} from "events";
import dispatcher from "../../dispatcher"
import * as VideoActionConstants from '../../actions/videos/VideoActionConstants'
import * as CommentActions from "../../actions/videos/CommentActions"

function getCurrentDatePlusDays(days) {
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + days);
  return currentDate.toLocaleDateString('en-US', options);
}

class CommentsStore extends EventEmitter {
  constructor() {
    super();

    this.comments = [
      {
        commentId: 1,
        videoId: 1,
        studentId: 1,
        coachId: null,
        createTimestamp: getCurrentDatePlusDays(-3),
        updateTimestamp: getCurrentDatePlusDays(-3),
        videoTimestamp: 30.472639,
        commentContentId: 1,
        commentChildren: [],

        text: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. '
          + 'Add 1 cup of frozen peas along with the mussels, if you like.',
        images: [require('../../static/images/paella.jpg'), require('../../static/images/contemplative-reptile.jpg')],
        videos: [],
      },
      {
        commentId: 2,
        videoId: 1,
        studentId: 1,
        coachId: null,
        createTimestamp: getCurrentDatePlusDays(-2),
        updateTimestamp: getCurrentDatePlusDays(-1),
        videoTimestamp: 214.532875,
        commentContentId: 1,
        commentChildren: [],

        text: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all '
          + 'continents except Antarctica',
        images: [require('../../static/images/contemplative-reptile.jpg')],
        videos: [],
      },
      {
        commentId: 3,
        videoId: 1,
        studentId: 2,
        coachId: null,
        createTimestamp: getCurrentDatePlusDays(-3),
        updateTimestamp: getCurrentDatePlusDays(-3),
        videoTimestamp: 216.0,
        commentContentId: 1,
        commentChildren: [],

        text: 'well meaning and kindly. \n a benevolent smile',
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

const commentsStore = new CommentsStore;
dispatcher.register(commentsStore.handleActions.bind(commentsStore));
export default commentsStore;

