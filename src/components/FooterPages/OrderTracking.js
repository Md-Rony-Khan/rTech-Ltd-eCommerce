/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import { Container, Divider, Grid, Input, Paper, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useStyles from './styles';

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <CheckCircleOutlineIcon />,
        2: <CheckCircleOutlineIcon />,
        3: <CheckCircleOutlineIcon />,
        4: <CheckCircleOutlineIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

function getSteps() {
    return ['Order Received', 'Payment Done', 'Delivery Processing', 'Order Delivered'];
}

/* function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Order Received';
        case 1:
            return 'Payment Done';
        case 2:
            return 'Delivery Processing';
        case 3:
            return 'Order Delivered';
        default:
            return 'Unknown step';
    }
} */

function OrderTracking() {
    const classes = useStyles();
    // eslint-disable-next-line no-unused-vars
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    /* 
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    }; */
    return (
        <div>
            <Container maxWidth="lg" className={classes.rootCon}>
                <Grid sm={12}>
                    <Paper className={classes.paperStyle}>
                        <Grid align="center">
                            <Typography variant="h4" className={classes.headerStyle}>
                                Check Your Order Status
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Check to see the latest status of your order (e.g. received status,
                                shipping status etc.)
                            </Typography>
                        </Grid>
                        <Divider />
                        <br />
                        <Grid align="center">
                            <Typography variant="h6" className={classes.headerStyle}>
                                Order ID
                            </Typography>
                            <form noValidate autoComplete="off">
                                <Input
                                    placeholder="Place your Order ID"
                                    inputProps={{ 'aria-label': 'description' }}
                                />
                                <Button variant="outlined" color="primary">
                                    Check
                                </Button>
                            </form>
                        </Grid>
                        <div className={classes.root}>
                            <Stepper
                                alternativeLabel
                                activeStep={activeStep}
                                connector={<ColorlibConnector />}
                            >
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                                            {label}
                                        </StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            {/* <div>
                                {activeStep === steps.length ? (
                                    <div>
                                        <Typography className={classes.instructions}>
                                            All steps completed - you&apos;re finished
                                        </Typography>
                                        <Button onClick={handleReset} className={classes.button}>
                                            Reset
                                        </Button>
                                    </div>
                                ) : (
                                    <div>
                                        <Typography className={classes.instructions}>
                                            {getStepContent(activeStep)}
                                        </Typography>
                                        <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                className={classes.button}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleNext}
                                                className={classes.button}
                                            >
                                                {activeStep === steps.length - 1
                                                    ? 'Finish'
                                                    : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div> */}
                        </div>
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
}

export default OrderTracking;
