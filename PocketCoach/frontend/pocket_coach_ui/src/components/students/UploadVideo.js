import React from "react";
import {Card, CardHeader, TextField, Button} from '@material-ui/core';
import VideoStore from "../../stores/videos/VideoStore";
import StudentProfilesStore from "../../stores/students/StudentProfilesStore";

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
        console.log("Video Constructor");
        this.state = {
            userId : 1, /* Should be passed in some way...  */
            projectTitle: '',
            projectDesc: '',
            projectVideo: '',
            videoTitle: '',
            projectGoals: ''
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
            projectVideo: e.target.files[0]
        });
    }

    createVideoObj = () => {
        return {
            videoId: VideoStore.getNumVideos() + 1,
            studentId: this.state.userId, /*  How to get this? */
            coachIds: [],
            title: this.state.videoTitle,
            icon: 3, /* Uhhhh  */
            createTimestamp: getCurrentDatePlusDays(0),
            numFeedback: 0,
            videoPath: require(this.state.projectVideo), /* I think  */
            goals: this.state.projectGoals
        };
    }

    createProjectHandler = () => {
        /* Insert the user's video in the VideoStore  */

        //var videoObj = this.createVideoObj();
        //VideoStore.insertVideo(videoObj);

        /*  Update the student's information in the StudentProfile store   
            All we're doing here is appending the video onto the student's
            video list. Really we should store a list of projects per student
            and update that list with a project object (just like the VideoStore) */
        StudentProfilesStore.updateStudentProfile(this.state.userId, VideoStore.getNumVideos());
        this.props.nextHandler();
    }

    render() {
        return (
            <Card>
            <CardHeader title="Create a Project"/>
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

                <input type="file" style={{display:'none'}}
                onChange={this.uploadVideoHandler} 
                ref={fileInput => this.fileInput = fileInput}/>

                <Button variant="contained" color="primary" 
                onClick={() => this.fileInput.click()}>
                Upload a Video
                </Button>

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

                <Button variant="contained" color="primary" 
                onClick={this.createProjectHandler}>
                Create Project
                </Button>

            </form>
            </Card>
        );
    }
}


export default UploadVideo;