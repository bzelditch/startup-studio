import React from 'react';
import {Typography, Card, CardContent, Grid, Avatar, CardHeader, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './Styles.css';
import { createRequireFromPath } from 'module';
import { grey } from '@material-ui/core/colors';
import axios from "axios";

const styles = {
    smallAvatar : {
        margin : 10
    },
    bigAvatar : {
        margin: 10,
        width: 200,
        height: 200,
    },
    /* Can modify the styling later */
    studentInformation : {
        backgroundColor: 'lightgrey'
    }
}

class CoachInformation extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            userName: props.userName,
            userHeadshot: props.userHeadshot,
            userInformation: props.userInformation
        }
    }

  handleSendNotification = () => {
    console.log("handleSendNotification sending")
    axios.get('http://127.0.0.1:8000/api/notify/')
      .then(res => {
        console.log(res.data)
      })
  };

    render () {
        return (
            <Card className={this.props.classes.coachInformation}>
                <Grid container spacing={24}>
                    <Grid item xs={4}>
                        <Avatar src={this.props.userHeadshot} alt={this.props.userName} className={this.props.classes.bigAvatar}/>
                    </Grid>
                    <Grid item xs={8}>
                        <CardHeader title={this.props.userName}/> {/* Should be passed in via props*/}
                        <CardContent>
                            <Typography>
                                Specialities
                            </Typography>
                            <div>
                                {this.props.userInformation.coachSpecialty}
                            </div>
                            <br>
                            </br>
                            <Typography>
                                Average Response Time
                            </Typography>
                            <div>
                                {this.props.userInformation.coachResponseTime}
                            </div>
                            <br>
                            </br>
                            <Typography>
                                Worked At
                            </Typography>
                            <div>
                                {this.props.userInformation.workedAt}
                            </div>
                            <br>
                            </br>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleSendNotification}>
                                Book Now
                            </Button>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        )
    };
}
export default withStyles(styles)(CoachInformation);
