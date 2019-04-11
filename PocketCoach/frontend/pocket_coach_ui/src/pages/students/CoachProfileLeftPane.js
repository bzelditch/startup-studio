import React, { Fragment } from 'react';
import CoachInformation from './CoachInformation';
import {Paper, Button} from '@material-ui/core';

class CoachProfileLeftPane extends React.Component {
    constructor(props){
        super(props);
        this.userName = props.userName;
        this.userHeadshot = props.userHeadshot;
        this.userInformation = props.userInformation
    }
    render (props) {
        return (
            <Fragment>

                <CoachInformation userName={this.userName}
                                    userHeadshot={this.userHeadshot}
                                    userInformation={this.userInformation}/>

                <br/>

            </Fragment>
        )
    };
}
export default CoachProfileLeftPane;
