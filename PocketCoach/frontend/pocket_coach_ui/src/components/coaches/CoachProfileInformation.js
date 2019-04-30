import React from 'react';
import {Typography, Card, CardContent, Grid, Avatar, CardHeader,Divider} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { createRequireFromPath } from 'module';
import StarRatings from 'react-star-ratings';

const styles = theme => ({
  smallAvatar : {
    margin : 10
  },
  bigAvatar : {
    margin: theme.spacing.unit,
    width: 300,
    height: 300,
    borderStyle: "solid",
    borderWidth: "3px",
    borderColor: theme.palette.navBlack,
  },
  /* Can modify the styling later */
  studentInformation : {
    backgroundColor: theme.palette.grey[200]
  },
  divider: {
    marginTop: 1,
    marginBottom: theme.spacing.unit,
  }
});

class CoachProfileInformation extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      curCoach: props.curCoach,
    }
  }
  render () {
    const {classes} = this.props;
    const {curCoach} = this.state;
    return (
      <Card className={classes.studentInformation}>
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <Avatar src={curCoach.profileImage} className={classes.bigAvatar}/>
          </Grid>
          <Grid item xs={8}>
            <CardHeader title={curCoach.firstName + " " + curCoach.lastName}/> {/* Should be passed in via props*/}
            <CardContent>
              <StarRatings
                rating={curCoach.rating}
                starRatedColor="red"
                numberOfStars={5}
                name='rating'
                starDimension="30px"
                starSpacing="3px"
              />
              <br/><br/>
              <Typography>
                Intro:
              </Typography>
              <div>
                {curCoach.intro}
              </div>
              <br>
              </br>
              <Typography>
                Specialties:
              </Typography>
              <div>
                {curCoach.specialties.join(", ")}
              </div>
              <br/>
              <Typography>
                Work Experience:
              </Typography>
              <div>
                {curCoach.workExperience.join(", ")}
              </div>
            </CardContent>
          </Grid>
          <Grid item xs={12}>
            <CardContent>
              <br/>
              <Divider className={classes.divider}/>
              <Typography variant="h6">
                Sample Videos
              </Typography>
              <br/>
              <iframe src= {'https://www.youtube.com/embed/' + curCoach.videoLink}
                      frameBorder='0'
                      allow='autoplay; encrypted-media'
                      allowFullScreen
                      title='video'
              />
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    )
  };
}
export default withStyles(styles)(CoachProfileInformation);