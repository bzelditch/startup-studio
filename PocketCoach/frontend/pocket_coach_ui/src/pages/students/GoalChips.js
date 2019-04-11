import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

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
      <Chip
        label="Accent"
        label="Basic Chip"
        className={classes.chip}
        onClick={handleClick}
      />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Body Language"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Content"
        clickable
        className={classes.chip}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Confidence"
        clickable
        className={classes.chip}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Engagement"
        clickable
        className={classes.chip}
        label="Clickable Chip"
        className={classes.chip}
     />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Primary Clickable Chip"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Expressions"
        icon={<FaceIcon />}
        label="Primary Clickable Chip"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Filler Words"
        clickable
        className={classes.chip}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Gestures"
        clickable
        className={classes.chip}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Pacing"
        clickable
        className={classes.chip}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Posture"
        clickable
        className={classes.chip}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Presence"
        clickable
        className={classes.chip}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Projection"
        clickable
        className={classes.chip}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Tone"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        label="Deletable Primary Chip"
        onDelete={handleDelete}
        className={classes.chip}
        color="primary"
      />
      <Chip
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
        label="Deletable Secondary Chip"
        onDelete={handleDelete}
        className={classes.chip}
        color="secondary"
      />
      <Chip
        icon={<FaceIcon />}
        label="Deletable Secondary Chip"
        onDelete={handleDelete}
        className={classes.chip}
        color="secondary"
      />
    </div>
  );
}

GoalChips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoalChips);
