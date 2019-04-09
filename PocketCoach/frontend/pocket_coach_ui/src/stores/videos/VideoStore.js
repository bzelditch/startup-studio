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

class VideoStore extends EventEmitter {
  constructor() {
    super();

    this.videoDatabase = [
      {
        videoId: 1,
        studentId: 1,
        coachIds: [1],
        title: "Q1/Q2 Presentation: First try!",
        icon: 1,
        createTimestamp: getCurrentDatePlusDays(-13),
        numFeedback: 7,
        videoPath: require('../../static/videos/attempt1.m4v'),
        goals: "Please give me feedback on my delivery skills and the presentation conent.  I am preparing to pitch to a VC."
      },
      {
        videoId: 2,
        studentId: 1,
        coachIds: [1],
        title: "Q1/Q2 Presentation: Second try!",
        icon: 2,
        createTimestamp: getCurrentDatePlusDays(-3),
        numFeedback: 3,
        videoPath: require('../../static/videos/attempt2.m4v'),
        goals: "Please give me feedback on my delivery skills and the presentation conent.  I am preparing to pitch to a VC."
      },
      {
        videoId: 3,
        studentId: 1,
        coachIds: [1],
        title: "Q1/Q2 Presentation: Third try!",
        icon: 3,
        createTimestamp: getCurrentDatePlusDays(0),
        numFeedback: 2,
        videoPath: require('../../static/videos/attempt3.m4v'),
        goals: "Please give me feedback on my delivery skills, especially presence and pacing.  I am preparing to pitch to a VC."
      },
      {
        videoId: 4,
        studentId: 1,
        coachIds: [1],
        title: "Rocky Studio!",
        icon: 1,
        createTimestamp: getCurrentDatePlusDays(-40),
        numFeedback: 4,
        videoPath: require('../../static/videos/rocky_video2.mp4'),
        goals: "Please give me feedback on my delivery skills and the presentation conent.  I am preparing to pitch to a VC."
      },
    ];

    this.nextVideoId = this.videoDatabase.length + 1;
  }

  insertVideo(video) {
    this.videoDatabase.push(video);
  }

  getNumVideos() {
    return this.videoDatabase.length;
  }

  getAll() {
    return this.videoDatabase;
  }

  getVideoDetailsById(videoId) {
    const videoDetails = this.videoDatabase.find(v => v.videoId === videoId )
    return videoDetails;
  }

  handleActions(action) {
    console.log("video handleActions")
    switch(action.type) {
    }
  }
}

const videoStore = new VideoStore;
dispatcher.register(videoStore.handleActions.bind(videoStore));
export default videoStore;

