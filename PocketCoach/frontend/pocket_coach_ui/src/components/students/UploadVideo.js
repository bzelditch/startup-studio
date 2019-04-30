import React from "react";
import {Card, CardHeader, CardContent, TextField, Button} from '@material-ui/core';
import VideoStore from "../../stores/videos/VideoStore";
import StudentStore from "../../stores/students/StudentStore";
import {Link, Route, Switch} from 'react-router-dom';

function getCurrentDatePlusDays(days) {
    const options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    };
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + days);
    return currentDate.toLocaleDateString('en-US', options);
  }


/* Component for users to upload videos when creating a project   */

class UploadVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId : 1, /* Should be passed in some way...  */
            projectTitle: '',
            projectDesc: '',
            projectVideo: '',
            projectVideoName: '',
            videoTitle: '',
            projectGoals: '',
        };
        this.createVideoObj = this.createVideoObj.bind(this);
        this.createProjectHandler = this.createProjectHandler.bind(this);
        this.textInputHandler = this.textInputHandler.bind(this);
        this.uploadVideoHandler = this.uploadVideoHandler.bind(this);
    }

    textInputHandler = field => e => {
        this.setState({
            [field] : e.target.value
        });
    }

    uploadVideoHandler = e => {
        this.setState({
            projectVideo: e.target.files[0],
            projectVideoName: e.target.files[0].name
        });
        console.log("Chose file " + e.target.files[0].name);
    }

    createVideoObj = () => {
        return({
            videoId: VideoStore.getNumVideos() + 1,
            studentId: this.state.userId, /*  How to get this? */
            coachIds: [],
            title: this.state.videoTitle,
            icon: 3, /* Uhhhh  */
            createTimestamp: getCurrentDatePlusDays(0),
            numFeedback: 0,
            videoPath: require(this.state.projectVideo), /* I think  */
            goals: this.state.projectGoals
        });
    }

    createProjectHandler = () => {
        /* Insert the user's video in the VideoStore  */

        //var videoObj = this.createVideoObj();
        var videoObj = {};
        VideoStore.insertVideo(videoObj);

        /*  Update the student's information in the StudentProfile store   
            All we're doing here is appending the video onto the student's
            video list. Really we should store a list of projects per student
            and update that list with a project object (just like the VideoStore) */
        StudentStore.updateStudentProfile(this.state.userId, VideoStore.getNumVideos());
        this.props.nextHandler();
    }

    render() {
        let fileSelectedDisplay = this.state.projectVideoName ? 
                        (<div>{this.state.projectVideoName} </div>) : 
                        (<div>Select Video...</div>);
        return (
            <Card>
            <CardHeader title="Create a Project"/>
            <CardContent>
            <form>
                <TextField id="projectTitle" 
                label="Project Name" 
                helperText="Name your project."
                onChange={this.textInputHandler('projectTitle')}
                fullWidth />

                <br/>

                <TextField id="projectDesc" 
                label="Project Description" 
                helperText="Provide a brief description of your project."
                onChange={this.textInputHandler('projectDesc')}
                fullWidth />

                <br/>

                <input type="file" style={{display: 'none'}}
                onChange={this.uploadVideoHandler} 
                ref={fileInput => this.fileInput = fileInput}/>

                <Button variant="contained" color="secondary" 
                onClick={() => this.fileInput.click()}>
                Upload a Video
                </Button>

                <div>
                    {fileSelectedDisplay}
                </div>

                <br/>

                <TextField id="videoTitle" 
                label="Video Title" 
                helperText="Name your video."
                onChange={this.textInputHandler('videoTitle')}
                fullWidth />

                <br/>

                <TextField id="projectGoals" 
                label="Goals" 
                helperText="Describe your goal(s)."
                onChange={this.textInputHandler('projectGoals')}
                fullWidth />

                <br/>

                <Button variant="contained" color="secondary" 
                onClick={this.createProjectHandler}>
                    Create Project
                </Button>

            </form>
            </CardContent>
            </Card>
        );
    }
}


export default UploadVideo;