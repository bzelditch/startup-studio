import React, {Component, Fragment} from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  IconButton
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from "@material-ui/core/SvgIcon/SvgIcon";


const styles = theme => ({
  card: {
    backgroundColor: theme.palette.grey[200],
    marginTop:theme.spacing.unit,
    marginBottom:theme.spacing.unit,
  },

  title: {
    backgroundColor: theme.palette.primary.main,
    paddingTop:theme.spacing.unit,
    paddingBottom:theme.spacing.unit,
  },
  titleText: {
    fontWeight:600,
    color:theme.palette.common.white,
  }
});


class FeedbackCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {feedback, classes} = this.props
    return (
      <Card className={classes.card}>

        <CardHeader
          className={classes.title}
          action={(
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          )}
          title={(
            <Typography variant="subtitle1" className={classes.titleText}>
              Key Next Steps
            </Typography>
          )}
          disableTypography
        />

        <CardContent>
          <Typography component="body1">
            {feedback.keyNextSteps}
          </Typography>
        </CardContent>

      </Card>
    );
  }
}

export default withStyles(styles)(FeedbackCard);
