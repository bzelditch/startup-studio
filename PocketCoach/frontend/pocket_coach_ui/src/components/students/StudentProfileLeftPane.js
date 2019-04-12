import React, { Fragment } from 'react';
import StudentInformation from './StudentInformation';
import {Paper, Button} from '@material-ui/core';
import {Link, Route, Switch} from 'react-router-dom';
import UploadVideo from './UploadVideo';

class StudentProfileLeftPane extends React.Component {
    constructor(props){
        super(props);
        this.userName = props.userName;
        this.userHeadshot = props.userHeadshot;
        this.userInformation = props.userInformation
        this.handler = this.handler.bind(this);
    }

    handler() {
        console.log("Switching tabs")
        this.props.createNewProjectHandler("Find Coaches");
    }
    render (props) {
        return (
            <Fragment>

                <StudentInformation userName={this.userName} 
                                    userHeadshot={this.userHeadshot} 
                                    userInformation={this.userInformation}/>
                
                <br/>

                <Button
                variant="contained"
                color="secondary"
                onClick={this.handler}>
                        Create New Project
                </Button>

            </Fragment>
        )
    };
}
export default StudentProfileLeftPane;