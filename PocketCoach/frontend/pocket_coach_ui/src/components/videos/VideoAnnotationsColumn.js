import React, { Component, Fragment } from 'react'
import PlayerAnnotationController from "./PlayerAnnotationController";

class VideoAnnotationsColumn extends Component {
  constructor(props) {
    super(props);
  };


  render() {
    return (
      <div>
        <PlayerAnnotationController/>
      </div>
    )
  }
};

export default VideoAnnotationsColumn;