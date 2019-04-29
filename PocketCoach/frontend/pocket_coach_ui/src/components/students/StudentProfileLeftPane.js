import React, { Fragment } from 'react';
import StudentInformation from './StudentInformation';
import {Paper, Button, Tab} from '@material-ui/core';
import {Link, Route, Switch} from 'react-router-dom';

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
                color="secondary"
                component={Link} to={this.props.match.url+"/findcoaches"}>
                Create New Project
              </Button>
            </Fragment>
        )
    };
}
export default StudentProfileLeftPane;