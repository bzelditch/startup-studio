import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import ToggleChip from './ToggleChip';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

function handleDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.');
  // this.label = "Clicked"
  // this.color = "primary"
}

function GoalChips(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      
      <ToggleChip buttonLabel="Accent" goalHandler={props.goalHandler}/>

      <ToggleChip buttonLabel="Body Language" goalHandler={props.goalHandler}/>

      <ToggleChip buttonLabel="Content" goalHandler={props.goalHandler}/>

      <ToggleChip buttonLabel="Confidence" goalHandler={props.goalHandler}/>

      <ToggleChip buttonLabel="Engagement" goalHandler={props.goalHandler}/>

      <ToggleChip buttonLabel="Filler Words" goalHandler={props.goalHandler}/>

      <ToggleChip buttonLabel="Gestures" goalHandler={props.goalHandler}/>

      <ToggleChip buttonLabel="Pacing" goalHandler={props.goalHandler}/>

      <ToggleChip buttonLabel="Posture" goalHandler={props.goalHandler}/>

      <ToggleChip buttonLabel="Presence" goalHandler={props.goalHandler}/>

      <ToggleChip buttonLabel="Projection"goalHandler={props.goalHandler}/>
      
      <ToggleChip buttonLabel="Tone" goalHandler={props.goalHandler}/>
    </div>
  );
}

GoalChips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoalChips);
