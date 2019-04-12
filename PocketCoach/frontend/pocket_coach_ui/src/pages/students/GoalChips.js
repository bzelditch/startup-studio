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
      
      <ToggleChip buttonLabel="Accent"/>

      <ToggleChip buttonLabel="Body Language"/>

      <ToggleChip buttonLabel="Content"/>

      <ToggleChip buttonLabel="Confidence"/>

      <ToggleChip buttonLabel="Engagement"/>

      <ToggleChip buttonLabel="Filler Words"/>

      <ToggleChip buttonLabel="Gestures"/>

      <ToggleChip buttonLabel="Pacing"/>

      <ToggleChip buttonLabel="Posture"/>

      <ToggleChip buttonLabel="Presence"/>

      <ToggleChip buttonLabel="Projection"/>
      
      <ToggleChip buttonLabel="Tone"/>
    </div>
  );
}

GoalChips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoalChips);
