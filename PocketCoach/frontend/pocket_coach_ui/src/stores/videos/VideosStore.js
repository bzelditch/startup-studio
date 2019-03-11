import {EventEmitter} from "events";
import dispatcher from "../../dispatcher"
import * as VideoActionConstants from '../../actions/videos/VideoActionConstants'
import * as VideoActions from "../../actions/videos/VideoActions"
import axios from 'axios';

function getCurrentDatePlusDays(days) {
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + days);
  return currentDate.toLocaleDateString('en-US', options);
}

class VideosStore extends EventEmitter {
  constructor() {
    super();

    this.state = {
        selectedVideo: null
    }

    this.videos = [
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

        text: 'This yummy yayyy paella is a perfect party dish and a fun meal to cook together with your guests. '
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
    
  }

  getAll() {
    return this.videos;
  }

  // User selects a video to upload
  chooseVideo = event => {
    this.setState({
        selectedVideo: event.target.files[0]
    })
  }

  uploadVideo = () => {
      const fd = new FormData();
      fd.append('video', this.state.selectedVideo);
      axios.post("SOME URI HERE", fd)
  }

  handleActions(action) {
    switch(action.type) {
      case VideoActionConstants.CHOOSE_VIDEO:
        this.chooseVideo(); // NEED AN ARGUMENT HERE
      case VideoActionConstants.UPLOAD_VIDEO:
        this.uploadVideo(action.video);
    }
  }
}

const videosStore = new VideosStore;
dispatcher.register(videosStore.handleActions.bind(videosStore));
export default videosStore;