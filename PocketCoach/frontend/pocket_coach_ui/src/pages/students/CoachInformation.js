import React from 'react';
import {Typography, Card, CardContent, Grid, Avatar, CardHeader, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './Styles.css';
import { createRequireFromPath } from 'module';
import { grey } from '@material-ui/core/colors';
import axios from "axios";

const styles = theme => ({
    smallAvatar : {
        margin : 10
    },
    bigAvatar : {
        margin: 10,
        width: 150,
        height: 150,
    },
    /* Can modify the styling later */
    studentInformation : {
        backgroundColor: 'lightgrey'
    }
});

class CoachInformation extends React.Component {
    constructor (props) {
        super(props);
        console.log(props)
        this.state = {
            userName: props.userName,
            userHeadshot: props.userHeadshot,
            userInformation: props.userInformation,
            finalVideoLink: props.finalVideoLink,
            clicked: false
        }

    }

  handleSendNotification = () => {
    console.log("handleSendNotification sending")
    this.setState({
        clicked: !this.state.clicked
    });
    axios.get('http://127.0.0.1:8000/api/notify/')
      .then(res => {
        console.log(res.data)
      })
  };

    render () {
      console.log(this.props.userName)
      console.log(this.state.finalVideoLink)
        return (
            <Card className={this.props.classes.coachInformation}>
                <CardContent>
                <Grid container spacing={12}>
                    <Grid item xs={2}>
                        <Avatar src={this.props.userHeadshot} alt={this.props.userName} className={this.props.classes.bigAvatar}/>
                    </Grid>
                    <Grid item xs={4}>
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
                            </CardContent>
                    </Grid>
                    <Grid item container xs={4} alignItems= 'center'>
                      <iframe src= {'https://www.youtube.com/embed/' + this.props.finalVideoLink}
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                      />
                    </Grid>
                    <Grid item container xs={2} >
                        <Grid item>
                            <Typography variant= "subtitle2" color = 'primary'>
                                $99 for 3 Sessions
                            </Typography>
                            <Button
                                variant="contained"
                                color={this.state.clicked ? "primary" : "secondary"}
                                onClick={this.handleSendNotification}>
                                Book Now
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                </CardContent>
            </Card>
        )
    };
}
export default withStyles(styles)(CoachInformation);
