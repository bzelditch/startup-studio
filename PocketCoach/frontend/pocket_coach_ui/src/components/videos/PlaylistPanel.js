import React, {Component, Fragment} from 'react';
import {Card, CardHeader, Grid, CardContent, Divider, List, ListItem, ListItemText,ListItemAvatar,Avatar,Typography} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

// import './playlistpanel.css';


const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    backgroundcolor: 'firebrick',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  // card: {
  //   backgroundColor: theme.palette.grey[200],
  // },
  // cardHeaderRoot: {
  //   backgroundColor: theme.palette.primary.main,
  // },
  // cardHeaderTitle: {
  //   color: theme.palette.common.white,
  // },
};


class PlaylistPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlist: props.playlist,
      curVideo: props.curVideo,
    }
  };

  getCurVideoIndex(playlist, videoId) {
    return playlist.videos.findIndex(video => video.videoId === videoId);
  }

  render() {
    const { playlist, curVideo } = this.state;
    const { classes, handlePlaylistVideoListItemClick } = this.props;
    const curVideoIndex = this.getCurVideoIndex(playlist, curVideo.videoId)
    return (
      <Fragment>
      <div className = "cardTitle">
        <Card className={classes.card}>
          <CardHeader
            classes={{
              root: classes.cardHeaderRoot,
              title: classes.cardHeaderTitle,
            }}
            title={playlist.title}
          />
          <CardContent>
            <List>

            {playlist.videos.map((video) =>
            <Fragment>
              <ListItem
                key={video.videoId}
                alignItems="flex-start"
                selected={video.videoId === curVideo.videoId}
                onClick={event => handlePlaylistVideoListItemClick(playlist, video.videoId)}>
                <ListItemAvatar>
                  <Avatar>{video.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={video.title}
                  secondary={
                    <Fragment>
                      <Typography color="textSecondary">
                        {video.createTimestamp}
                      </Typography>
                      <Typography color="textSecondary">
                        {video.numFeedback}
                      </Typography>
                    </Fragment>
                  }
                />
              </ListItem>
              <Divider />
            </Fragment>
          )}
            </List>
          </CardContent>
        </Card>
        </div>
      </Fragment>
    )
  }
};

export default withStyles(styles)(PlaylistPanel);
