import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UploadVideo from '../../components/students/UploadVideo';
import FindCoachCard from './FindCoachCard';
import MySessions from './CoachSearchResults';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Upload Video', 'Preferences & Goals', 'Select Coach'];
}

class FindCoachStepper extends React.Component {

  constructor(props){
    super(props);
    this.presentationTypeHandler = this.presentationTypeHandler.bind(this);
    this.goalHandler = this.goalHandler.bind(this);
    this.responseTimeHandler = this.responseTimeHandler.bind(this);
  };

  state = {
    activeStep: 0,
    skipped: new Set(),
    chosenPresentationTypes: [],
    chosenGoals: [],
    chosenResponseTimes: []
  };

  presentationTypeHandler(type) {
    if (this.state.chosenPresentationTypes.indexOf(type) > -1) return;
    this.setState({
      chosenPresentationTypes: [...this.state.chosenPresentationTypes,type]
    });
    console.log(this.state.chosenPresentationTypes);
  }

  goalHandler(goal) {
    if (this.state.chosenGoals.indexOf(goal) > -1) return;
    this.setState({
      chosenGoals: [...this.state.chosenGoals,goal]
    });
    console.log(this.state.chosenGoals);
  }

  responseTimeHandler(time) {
    if (this.state.chosenResponseTimes.indexOf(time) > -1) return;
    this.setState({
      chosenResponseTimes: [...this.state.chosenResponseTimes,time]
    });
    console.log(this.state.chosenResponseTimes);
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div>
            <UploadVideo nextHandler={this.handleNext}/>
          </div>
        );
      case 1:
        /*return 'Preferences & Goals';*/
        return (
          <div>
            <FindCoachCard nextHandler={this.handleNext} 
                presentationTypeHandler={this.presentationTypeHandler}
                goalHandler={this.goalHandler} responseTimeHandler={this.responseTimeHandler}/>
          </div>
        );
      case 2:
        return (
          <div>
            <MySessions chosenPresentationTypes={this.state.chosenPresentationTypes}
              chosenGoals={this.state.chosenGoals} chosenResponseTimes={this.state.chosenResponseTimes}/>
          </div>
        );
      default:
        return 'Unknown step';
    }
  }

  isStepOptional = step => step === 1;

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            // if (this.isStepOptional(index)) {
            //   labelProps.optional = <Typography variant="caption">Optional</Typography>;
            // }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{this.getStepContent(activeStep)}</Typography>
            </div>
          )}
        </div>
      </div>
    );
  }
}

FindCoachStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(FindCoachStepper);
