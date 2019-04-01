import React from 'react';
import {Typography, Card, CardContent, Grid, Avatar, CardHeader} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './Styles.css';
import { createRequireFromPath } from 'module';
import { grey } from '@material-ui/core/colors';

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

class StudentInformation extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            userName: props.userName,
            userHeadshot: props.userHeadshot,
            userCoaches: props.userCoaches,
            userVideos: props.userVideos
        }
    }
    render () {
        return (
            <Card className={this.props.classes.studentInformation}>
                <Grid container spacing={24}>
                    <Grid item xs={4}>
                        <Avatar src={this.props.userHeadshot} alt={this.props.userName} className={this.props.classes.bigAvatar}/>
                    </Grid>
                    <Grid item xs={8}>
                        <CardHeader title={this.props.userName}/> {/* Should be passed in via props*/}
                        <CardContent>
                            <p>
                                Hi
                            </p>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        )
    };
}
export default withStyles(styles)(StudentInformation);