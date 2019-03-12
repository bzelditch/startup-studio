import React, {Component, Fragment} from 'react';
import {Card, CardHeader, Grid, CardContent, Divider, List, ListItem, ListItemText,ListItemAvatar,Avatar,Typography} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import {getCurrentDatePlusDays} from "../../stores/videos/CommentsStore";

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

function getDateString(date) {
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}

const playlists = [
  {
    title: "First try!",
    icon: 1,
    createTimestamp: getCurrentDatePlusDays(-13),
    numFeedback: 7,
  },
  {
    title: "Second try!",
    icon: 2,
    createTimestamp: getCurrentDatePlusDays(-4),
    numFeedback: 3,
  },
  {
    title: "Third try!",
    icon: 3,
    createTimestamp: getCurrentDatePlusDays(0),
    numFeedback: 2,
  }
];

class PlaylistPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlists: playlists,
    }
  };

  render() {
    const { playlists } = this.state;
    const { classes } = this.props;

    return (
      <Fragment>
        <Card className={classes.card}>
          <CardHeader
            classes={{
              root: classes.cardHeaderRoot,
              title: classes.cardHeaderTitle,
            }}
            title="Startup Studio Pitch"
          />
          <CardContent>
            <List>

            {playlists.map((playlist) =>
            <Fragment>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar>{playlist.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={playlist.title}
                  secondary={
                    <Fragment>
                      <Typography color="textSecondary">
                        {getDateString(playlist.createTimestamp)}
                      </Typography>
                      <Typography color="textSecondary">
                        {playlist.numFeedback}
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


