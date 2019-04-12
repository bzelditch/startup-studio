import React from 'react';
import {Chip, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    chip: {
      marginRight: theme.spacing.unit,
      marginBottom: theme.spacing.unit
    },
    clickedButton: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        width: "auto",
        height: "32px",
        borderRadius: "15px",
        textTransform: "none"
    },
    disabledButton: {
        backgroundColor: theme.palette.grey[400],
        color: "black",
        width: "auto",
        height: "32px",
        borderRadius: "15px",
        textTransform: "none",
        marginTop: 0,
        fontSize: 18,
        fontWeight: 300
    }
  });

class ToggleChip extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: false,
        };
        this.toggleHander = this.toggleHander.bind(this);
    }

    toggleHander() {
        this.setState({
            clicked: !this.state.clicked
        });
    }

    render() {
        let buttonStyle = this.state.clicked ? this.props.classes.clickedButton : this.props.classes.disabledButton;
        return(
            /*
            <Button variant="p" className={buttonStyle} onClick={this.toggleHander}>
                {this.props.buttonLabel}
            </Button>
            */
           <Chip color={this.state.clicked ?"primary": "default"} 
           clickable onClick={this.toggleHander} label={this.props.buttonLabel}
            className={this.props.classes.chip}/>
        );
    };
}

export default withStyles(styles)(ToggleChip);