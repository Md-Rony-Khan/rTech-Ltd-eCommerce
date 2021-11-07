import { Container, Divider, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

function PrivacyPolicy() {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={classes.rootCon}>
                <Grid sm={12}>
                    <Paper className={classes.paperStyle}>
                        <Grid align="start">
                            <Typography variant="h4" className={classes.headerStyle}>
                                Privacy Policy
                            </Typography>
                        </Grid>
                        <Divider />
                        <Grid align="start">
                            <Typography variant="h5" className={classes.headerStyle}>
                                rTech Ltd. an online shop in Bangladesh for all kinds of mobile,
                                accessories at best price.{' '}
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="h6" className={classes.sectionHeaderStyle}>
                                Usage of information
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Our shop & website collect various type of required information when
                                you want to place an order for your desired product. When you
                                purchase on our online store, as a major aspect of the purchasing
                                and selling process, we accumulate the personal information you
                                provide us such as your name, phone number, address and email
                                address.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                We will retrieve, store and process your provided information for
                                arranging your purchase order on our and will record it for any
                                conceivable future allegations. We normally collect individual data,
                                for example, your title, name, gender, date of birth, email address,
                                postal location, delivery address, phone number, payment methods and
                                other related data.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                When you browse on our online store, we automatically record your
                                computer’s internet protocol (IP) address, in order to help diagnose
                                problems with our server, to administer our website and improve user
                                experience and measure interest in our offerings. We may send you
                                emails to communicate marketing and promotional offers according to
                                your preferences.
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="h6" className={classes.sectionHeaderStyle}>
                                Third Party Policy
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                We may pass your details to other companies affiliated with us only
                                for the purpose of providing you with better service. We may share
                                your details to our agents and subcontractors to help analyze data
                                and assist us with marketing or customer support. We may also use
                                third parties to assist us to deliver products to you and to assist
                                us to collect payments. In general, the third-party providers in
                                service agreement with us will only collect, use and disclose your
                                information to the extent necessary to allow them to perform the
                                services they provide. However, certain third-party service
                                providers, such as payment gateways and other payment transaction
                                processors, have their own privacy policies in respect to the
                                information we are required to provide to them for your
                                purchase-related transactions.
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="h6" className={classes.sectionHeaderStyle}>
                                Information Security
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                To protect your personal information, we take reasonable measures
                                and follow best industry practices to ensure it is not
                                inappropriately misused, accessed, disclosed, altered or destroyed.
                                If you provide us with your credit card information, the information
                                is encrypted using secure socket layer technology (SSL). We may
                                disclose your personal information if we are required to so by law
                                or in an incident which violates our Terms of Service. Visit our
                                Terms and Conditions page to learn more.
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
}

export default PrivacyPolicy;
