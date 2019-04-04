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

  render() {
    const { classes } = this.props;

    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
            />
          }
          label="Sales Pitch"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checkedC}
              onChange={this.handleChange('checkedC')}
              value="checkedB"
              color="primary"
            />
          }
          label="Startup Pitch"
        />
        <FormControlLabel control={<Checkbox value="checkedC" />} label="Company Presentation" />
        <FormControlLabel control={<Checkbox value="checkedC" />} label="Industry Speech" />
        <FormControlLabel control={<Checkbox value="checkedC" />} label="Interview Answer" />
      </FormGroup>
    );
  }
}

PresentationCheckbox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PresentationCheckbox);
