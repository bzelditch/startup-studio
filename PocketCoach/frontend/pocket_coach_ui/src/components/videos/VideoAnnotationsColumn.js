import React, { Component, Fragment } from 'react'
import PlayerAnnotationController from "./PlayerAnnotationController";

class VideoAnnotationsColumn extends Component {
  constructor(props) {
    super(props);
  };


  render() {
    const {curVideo} = this.props;
    return (
      <div>
        <PlayerAnnotationController curVideo={curVideo}/>
      </div>
    )
  }
};

export default VideoAnnotationsColumn;