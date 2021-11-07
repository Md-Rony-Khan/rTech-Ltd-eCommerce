import { Container, Divider, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

function ProceduresOfRefund() {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={classes.rootCon}>
                <Grid sm={12}>
                    <Paper className={classes.paperStyle}>
                        <Grid align="center">
                            <Typography variant="h4" className={classes.headerStyle}>
                                Procedures of Refund
                            </Typography>
                        </Grid>
                        <Divider />
                        <br />
                        <Grid align="start">
                            <Typography variant="body1" color="primary" gutterBottom>
                                How to request a refund and what are the conditions?
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Once you place an order and Advanced for that Product, the Advanced
                                Amount is Non-Refundable. Only in the case of unavailability of the
                                product or Out Of Stock status, We will refund the full amount.
                                Please Notice, from the date of your order, You must make the
                                Request for Refund within 3 Working Days. No request will be
                                accepted after the mentioned period.
                            </Typography>
                            <br />
                            <Typography variant="body1" color="primary" gutterBottom>
                                What is the Refund Mode ?
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Refunds are made through BANK TRANSFER & Bkash. It will take
                                approximately 7 working days for the refund to be adjusted.
                            </Typography>
                            <br />
                            <Typography variant="body1" color="primary" gutterBottom>
                                Can you request an exchange rather than a refund?
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                If you prefer to exchange your product, just inform our Customer
                                Service. We will evaluate and guide you for the next steps. The
                                product returned for exchange must be completely sealed/intact and
                                must be returned within 3 days from the date of purchase. No damaged
                                product will be eligible for an exchange facility.
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
}

export default ProceduresOfRefund;
