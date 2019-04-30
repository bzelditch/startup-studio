import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class FeedbackTimeCheckbox extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  addResponseTime = time => () => {
    this.props.responseTimeHandler(time);
  };

  render() {
    const { classes } = this.props;

    return (
      <FormGroup row>
        <FormControlLabel control={<Checkbox value="checkedC" />} onChange={this.addResponseTime("24 Hours")} label="24 Hours" />
        <FormControlLabel control={<Checkbox value="checkedC" />} onChange={this.addResponseTime("3 Days")} label="3 Days" />
        <FormControlLabel control={<Checkbox value="checkedC" />} onChange={this.addResponseTime("1 Week")} label="1 Week" />
        <FormControlLabel control={<Checkbox value="checkedC" />} onChange={this.addResponseTime("2 Weeks")} label="2 Weeks" />
      </FormGroup>
    );
  }
}

FeedbackTimeCheckbox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedbackTimeCheckbox);
