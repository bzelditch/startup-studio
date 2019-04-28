import React from 'react';
import {Typography, Card, CardContent, Grid, Avatar, CardHeader, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './Styles.css';
import { createRequireFromPath } from 'module';
import StarRatings from 'react-star-ratings';

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
        const {coach, classes} = this.props;
        return (
            <Card>
                <CardContent>
                <Grid container spacing={12}>
                    <Grid item xs={2}>
                        <Avatar src={coach.profileImage} className={classes.bigAvatar}/>
                    </Grid>
                    <Grid item xs={4}>
                        <CardHeader title={coach.firstName + " " + coach.lastName}/> {/* Should be passed in via props*/}

                        <CardContent>
                          <StarRatings
                            rating={coach.rating}
                            starRatedColor="red"
                            numberOfStars={5}
                            name='rating'
                            starDimension="30px"
                            starSpacing="3px"
                          />
                          <br/><br/>
                            <Typography>
                                Specialities
                            </Typography>
                            <div>
                                {coach.specialties.join(", ")}
                            </div>
                            <br>
                            </br>
                            <Typography>
                                Average Response Time
                            </Typography>
                            <div>
                                {coach.responseTime}
                            </div>
                            <br>
                            </br>
                            <Typography>
                                Worked At
                            </Typography>
                            <div>
                                {coach.workExperience.join(", ")}
                            </div>
                            <br>
                            </br>
                            </CardContent>
                    </Grid>
                    <Grid item container xs={4} alignItems= 'center'>
                      <iframe src= {'https://www.youtube.com/embed/' + coach.videoLink}
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
