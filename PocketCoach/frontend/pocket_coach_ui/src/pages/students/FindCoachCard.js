import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PresentationCheckbox from './PresentationCheckbox.js'
import FeedbackTimeCheckbox from './FeedbackTimeCheckbox.js'
import GoalChips from  './GoalChips.js'
import Divider from '@material-ui/core/Divider';

const styles = {
  card: {
    minWidth: 275,
    fontSize: 36,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
};

function FindCoachCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography color="textPrimary" variant = "h3" gutterBottom>
          <span>Tell Us What You Are Looking For...</span>
        </Typography>
        ------------------------------------------------------------
        <span> </span>
        <Typography color="textPrimary" variant = "h5" gutterBottom>
          <span>'What Type of Presentation is This?'</span>
        </Typography>
        <PresentationCheckbox/>
        ------------------------------------------------------------
        <span> </span>
        <Typography color="textPrimary" variant = "h5" gutterBottom>
          <span>'What Goals are You Working On?'</span>
          <GoalChips/>
        </Typography>
        ------------------------------------------------------------
        <span> </span>
        <Typography color="textPrimary" variant = "h5" gutterBottom>
          <span>'What is your Preferred Response Time?'</span>
=======
          Tell Us What You Are Looking For...
        </Typography>
        <Typography color="textPrimary" variant = "h4" gutterBottom>
          'What Type of Presentation is This?'
        </Typography>
        <PresentationCheckbox/>
        <Typography color="textPrimary" variant = "h4" gutterBottom>
          'What Goals are You Working On?'
          <GoalChips/>
        </Typography>
        <Typography color="textPrimary" variant = "h4" gutterBottom>
          'What is your Preferred Response Time?'
        </Typography>
        <FeedbackTimeCheckbox/>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" color= "secondary" target='MySessions.js'>Search</Button>
=======
        <Button size="large" variant="contained" color= "secondary">Search</Button>
      </CardActions>
    </Card>
  );
}

FindCoachCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FindCoachCard);
