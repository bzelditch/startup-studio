import React, { Fragment } from 'react';
import StudentInformation from './StudentInformation';
import {Paper, Button} from '@material-ui/core';

class StudentProfileLeftPane extends React.Component {
    constructor(props){
        super(props);
        this.userName = props.userName;
        this.userHeadshot = props.userHeadshot;
        this.userInformation = props.userInformation
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
                color="primary">
                Create New Project
                </Button>

            </Fragment>
        )
    };
}
export default StudentProfileLeftPane;