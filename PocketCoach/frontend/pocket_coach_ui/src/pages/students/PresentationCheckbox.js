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
  label: {
    fontSize: 14
  },
};

class PresentationCheckbox extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  addPresentationType = type => () => {
    this.props.presentationTypeHandler(type);
  };

  render() {
    const { classes } = this.props;

    return (
      <FormGroup row>
        <FormControlLabel control={<Checkbox value="checkedC"/>} onChange={this.addPresentationType("Sales Pitch")} label="Sales Pitch" />
    <FormControlLabel control={<Checkbox value="checkedC"/>} onChange={this.addPresentationType("Startup Pitch")} label="Startup Pitch" />
        <FormControlLabel control={<Checkbox value="checkedC"/>} onChange={this.addPresentationType("Company Presentation")} label="Company Presentation" />
    <FormControlLabel control={<Checkbox value="checkedC"/>} onChange={this.addPresentationType("Industry Speech")} label="Industry Speech" />
    <FormControlLabel control={<Checkbox value="checkedC" />} onChange={this.addPresentationType("Interview Answer")} label="Interview Answer" />
      </FormGroup>
    );
  }
}

PresentationCheckbox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PresentationCheckbox);
