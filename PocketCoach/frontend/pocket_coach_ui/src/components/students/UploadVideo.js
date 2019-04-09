import React from "react";
import {Card, CardHeader, TextField, Button} from '@material-ui/core';
import VideoStore from "../../stores/videos/VideoStore";
import StudentProfilesStore from "../../stores/students/StudentProfilesStore";


/* Component for users to upload videos when creating a project   */

class UploadVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectTitle: '',
            projectDesc: '',
            projectVideo: '',
            videoTitle: '',
            projectGoals: ''
        };
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

    createProjectHandler = () => {

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