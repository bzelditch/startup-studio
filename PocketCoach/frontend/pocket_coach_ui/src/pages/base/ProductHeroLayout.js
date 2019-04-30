
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LayoutBody from './LayoutBody';
import classNames from 'classnames';
const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '80vh',
      minHeight: 500,
      maxHeight: 1300,
    },
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 14,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
  },
  arrowDown: {
    position: 'absolute',
    bottom: theme.spacing.unit * 4,
  },
});

function ProductHeroLayout(props) {
  const { backgroundClassName, children, classes } = props;
  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="full">
        <div className={classNames(classes.background, backgroundClassName)} />
        {children}
        <div className={classes.backdrop} />

      </LayoutBody>
    </section>
  );
}



export default withStyles(styles)(ProductHeroLayout);