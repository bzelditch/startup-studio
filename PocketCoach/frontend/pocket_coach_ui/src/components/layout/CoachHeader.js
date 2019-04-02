import React from 'react'
import {AppBar, Toolbar, Typography, IconButton, InputBase, Tooltip} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MessageIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CoachStore from "../../stores/coaches/CoachStore";

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

const coachId = 1;

class CoachHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h5" color="inherit" style={{flex: 1}}>
              PocketCoach
            </Typography>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <Tooltip title="Messages" aria-label="Messages">
              <IconButton color="inherit">
                <MessageIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications" aria-label="Notifications">
              <IconButton color="inherit">
                <NotificationsIcon/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Profile Settings" aria-label="Profile Settings">
              <IconButton color="inherit">
                {CoachStore.getCoachAvatarById(coachId)}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
};

export default withStyles(styles)(CoachHeader);