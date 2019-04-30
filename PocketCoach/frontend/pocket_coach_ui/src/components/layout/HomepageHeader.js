import React from 'react'
import {AppBar, Toolbar, Typography, Button, InputBase, Tooltip, Link, Menu, MenuItem} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuLink  from './MenuLink';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  navBar: {
    background: theme.palette.navBlack,
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
    backgroundColor: fade(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.4),
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
      width: 400,
      '&:focus': {
        width: 400,
      },
    },
  },
});


function createMenuLinkObject(name, href) {
  return {
    name: name,
    href: href,
  }
};

class HomepageHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  render() {
    const {classes} = this.props;
    const studentMenuLinks = [
      createMenuLinkObject("Gabi Zandi", "/student/1"),
    ];
    const coachMenuLinks = [
      createMenuLinkObject("Gigi Rosenberg", "/coach/1"),
      createMenuLinkObject("Julia Crenshaw", "/coach/2"),
    ];
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.navBar}>
          <Toolbar >

            <Typography className={classes.title} variant="h4" color="primary" style={{flex: 1}}>
              <Link href="/" underline="none">
                PocketCoach
              </Link>
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

            <MenuLink buttonLabel={"Student Login"} menuLinks={studentMenuLinks}/>

            <MenuLink buttonLabel={"Coach Login"} menuLinks={coachMenuLinks}/>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
};

export default withStyles(styles)(HomepageHeader);