import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PresentationCheckbox from './PresentationCheckbox.js'
import FeedbackTimeCheckbox from './FeedbackTimeCheckbox.js'
import GoalChips from  './GoalChips.js'
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  card: {
    minWidth: 275,
    fontSize: 36,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  divider: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  }
});

function FindCoachCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography color="textPrimary" variant = "h5" gutterBottom>
          <span>Tell Us What You Are Looking For...</span>
        </Typography>
    
        <Divider className={classes.divider}/>
        
        <Typography color="textPrimary" variant = "h6" gutterBottom>
          <span>What Type of Presentation is This?</span>
        </Typography>
        <PresentationCheckbox/>
        <Divider className={classes.divider}/>
        <Typography color="textPrimary" variant = "h6" gutterBottom>
          <span>What Goals are You Working On?</span>
          <GoalChips/>
        </Typography>
        <Divider className={classes.divider}/>
        <Typography color="textPrimary" variant = "h6" gutterBottom>
          <span>What is your Preferred Response Time?</span>
          <FeedbackTimeCheckbox/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" color= "secondary" onClick={props.nextHandler}>Search</Button>
      </CardActions>
    </Card>
  );
}

FindCoachCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FindCoachCard);
