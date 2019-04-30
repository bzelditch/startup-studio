import React from 'react';
import {MenuItem, Menu, Button, Tooltip, Link, Toolbar} from '@material-ui/core'
import FeedbackCard from "../videos/FeedbackCard";

class MenuLink extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      buttonLabel: props.buttonLabel,
      anchorEl: null,
      menuLinks: props.menuLinks,
    };

  }


  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { buttonLabel, anchorEl, menuLinks } = this.state;

    return (
      <div>
        <Button
          color="inherit"
          onClick={this.handleClick}
        >
          {buttonLabel}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {menuLinks.map((menuItem) =>
            <MenuItem component={Link} href={menuItem.href}>{menuItem.name}</MenuItem>
          )}

        </Menu>
      </div>
    );
  }
}

export default MenuLink;