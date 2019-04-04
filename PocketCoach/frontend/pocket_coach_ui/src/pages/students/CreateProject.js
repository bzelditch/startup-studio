import React from 'react';
import {Stepper} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class CreateProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0
        }
    };

    render() {
        return(
            /* NEED A STEPPER!!!  */
            /* Depending on the state of stepper, display component corresponding   
                to that state:
                1) UploadVideo
                2) FindCoach
                3) ?????
            */

        );
    }
}

export default CreateProject;