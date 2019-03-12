import React, {Component, Fragment} from 'react';
import {Card, CardHeader, Grid, Chip, CardContent, Divider, List, ListItem, ListItemText,ListItemAvatar,Avatar,Typography} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import {Breadcrumbs} from "@material-ui/lab";

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
  chip: {
    marginRight: theme.spacing.unit,
  },
});

const recommendedCoaches = [
  {
    name: "Julia Crenshaw",
    avatar: "J",
    specialties: "Startup Pitches",
    workExperience: "BoxGroup, Union Square Ventures",
  },
  {
    name: "Milton Hinton",
    avatar: "M",
    specialties: "Acting, Delivery Skills",
    tagExperiences: ["Ted X Speaker"],
  },
  {
    name: "Matt Bosnahan",
    avatar: "M",
    specialties: "Startup Pitches",
    workExperience: "Founder of IntelliTech",
  },
  {
    name: "Rosanne Wallis",
    avatar: "R",
    specialties: "Debate, Business Strategy",
    tagExperiences: ["Professor at UCLA"],
  },
  {
    name: "Emily Yang",
    avatar: "E",
    specialties: "Marketing, Business Strategy",
    workExperience: "Proctor and Gamble, Coca Cola, Kraft Foods",
  },
];

class RecommendedCoachesPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recommendedCoaches: recommendedCoaches,
    }
  };

  render() {
    const { recommendedCoaches } = this.state;
    const { classes } = this.props;

    return (
      <Fragment>
        <Card className={classes.card}>
          <CardHeader
            classes={{
              root: classes.cardHeaderRoot,
              title: classes.cardHeaderTitle,
            }}
            title="Recommended Coaches"
          />
          <CardContent>
            <List>

            {recommendedCoaches.map((coach) =>
            <Fragment>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar>{coach.avatar}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={coach.name}
                  secondary={
                    <Fragment>
                      {'specialties' in coach ?
                        <Typography color="textSecondary">
                          Specialties: {coach.specialties}
                        </Typography>
                        : null
                      }
                      {'workExperience' in coach ?
                        <Typography color="textSecondary">
                          Worked at: {coach.workExperience}
                        </Typography>
                        :null
                      }
                      {'tagExperiences' in coach ?
                        <Fragment>
                        <br/>
                        {coach.tagExperiences.map((tag) =>
                          <Chip color="secondary" className={classes.chip} label={tag}/>
                        )}
                        </Fragment>
                        :null
                      }
                    </Fragment>
                  }
                />
              </ListItem>
              <Divider />
            </Fragment>

            )}
            </List>
          </CardContent>
        </Card>
      </Fragment>
    )
  }
};

export default withStyles(styles)(RecommendedCoachesPanel);
