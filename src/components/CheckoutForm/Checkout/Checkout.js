// eslint-disable-next-line prettier/prettier
import { Button, CircularProgress, CssBaseline, Divider, Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './styles';

const steps = ['Shipping Address', 'Payment Details'];

const Checkout = ({ cart, order, error, onCaptureCheckout }) => {
    const classes = useStyles();
    // eslint-disable-next-line no-unused-vars
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const history = useHistory();
    const [isFinished, setIsFinished] = useState(false);

    console.log(checkoutToken);
    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                setCheckoutToken(token);
                // eslint-disable-next-line no-shadow
            } catch (error) {
                history.push('/');
            }
        };
        generateToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    };
    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true);
        }, 3000);
    };

    let Confirmation = () =>
        // eslint-disable-next-line no-nested-ternary
        order.customer ? (
            <>
                <div>
                    <Typography
                        variant="h5"
                        style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                    >
                        Thank you for your purchase, {order.customer.firstname}{' '}
                        {order.customer.lastname}!
                    </Typography>
                    <Divider className={classes.divider} />
                    <Typography
                        variant="subtitle2"
                        style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                    >
                        Order ref: {order.customer_reference}
                    </Typography>
                </div>
                <br />
                <Button component={Link} variant="outlined" type="button" to="/">
                    Back to home
                </Button>
            </>
        ) : isFinished ? (
            <>
                <div>
                    <Typography
                        variant="h5"
                        style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                    >
                        Thank you for your purchase!
                    </Typography>
                    <Divider className={classes.divider} />
                </div>
                <br />
                <Button component={Link} variant="outlined" type="button" to="/">
                    Back to home
                </Button>
            </>
        ) : (
            <div className={classes.spinner}>
                <CircularProgress />
            </div>
        );

    if (error) {
        Confirmation = () => (
            <>
                <Typography
                    variant="h5"
                    style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                >
                    Error: {error}
                </Typography>
                <br />
                <Button component={Link} variant="outlined" type="button" to="/">
                    Back to home
                </Button>
            </>
        );
    }

    const Form = () =>
        activeStep === 0 ? (
            <AddressForm checkoutToken={checkoutToken} next={next} />
        ) : (
            <PaymentForm
                shippingData={shippingData}
                checkoutToken={checkoutToken}
                backStep={backStep}
                onCaptureCheckout={onCaptureCheckout}
                nextStep={nextStep}
                timeout={timeout}
            />
        );

    return (
        <>
            <CssBaseline />
            <div className={classes.toolbar}>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography
                            variant="h4"
                            align="center"
                            style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                        >
                            Checkout
                        </Typography>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {steps.map((step) => (
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                    </Paper>
                </main>
            </div>
        </>
    );
};

export default Checkout;
