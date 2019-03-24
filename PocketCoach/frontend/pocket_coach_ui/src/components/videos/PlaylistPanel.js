import React, {Component, Fragment} from 'react';
import {Card, CardHeader, Grid, CardContent, Divider, List, ListItem, ListItemText,ListItemAvatar,Avatar,Typography} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  card: {
    backgroundColor: theme.palette.grey[200],
  },
  cardHeaderRoot: {
    backgroundColor: theme.palette.primary.main,
  },
  cardHeaderTitle: {
    color: theme.palette.common.white,
  },
});



class PlaylistPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlist: props.playlist,
      curVideoIdx: props.curVideo,
    }
  };

  render() {
    const { playlist, curVideoIdx } = this.state;
    const { classes } = this.props;

    return (
      <Fragment>
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
              <ListItem alignItems="flex-start">
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
      </Fragment>
    )
  }
};

export default withStyles(styles)(PlaylistPanel);


