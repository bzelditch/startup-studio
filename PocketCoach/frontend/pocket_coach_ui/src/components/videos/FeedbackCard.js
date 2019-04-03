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
  },
  cardHeaderRoot: {
    backgroundColor: theme.palette.primary.main,
  },
  cardHeaderTitle: {
    color: theme.palette.common.white,
  },
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
          classes={{
            root: classes.cardHeaderRoot,
            title: classes.cardHeaderTitle,
          }}
          action={(
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          )}
          title="Key Next Steps"
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
