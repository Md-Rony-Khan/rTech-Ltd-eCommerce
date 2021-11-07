import { Container, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

function WarrantyAndRefundPolicy() {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={classes.rootCon}>
                <Grid sm={12}>
                    <Paper className={classes.paperStyle}>
                        <Grid align="center">
                            <Typography
                                variant="h5"
                                style={{ textDecoration: 'underline' }}
                                className={classes.headerStyle}
                            >
                                Terms & Conditions of Warranty Claim for Smart Devices
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="body1" gutterBottom>
                                ⦿ Once sold cannot be returned.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ⦿ 10 Days (Ten) Refund / Replacement GUARANTEE is applicable for the
                                following devices: Smartphone/ iPad/ Tab/ TV/ Laptop.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ⦿ Please be aware of the devices active/inactive status before
                                purchasing for claiming a warranty
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ⦿ Guarantee Policy is not valid for the following cases:
                            </Typography>
                            <Grid>
                                <Typography variant="body1" gutterBottom>
                                    ‣ Any kind of physical damage/scratch on product & product
                                    packaging
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    ‣ Display issues/Touch issues
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    ‣ Liquid Damage
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    ‣ Camera Damage (Internal/External)
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    ‣ Unauthorized Software Modification (Root/ Brick/ Jail Break)
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    ‣ Any issues after software/security updates on Android/iOS
                                    devices such as over-heating, battery draining, battery health
                                    decreasing, device lagging etc.
                                </Typography>
                            </Grid>
                            <Typography variant="body1" gutterBottom>
                                ⦿ If your purchased product seems unauthentic to you or you think it
                                is not performing as it should, we will thoroughly examine your
                                product and we will perform a side-by-side comparison with one of
                                our stocked original units. Please be patient as examining any tech
                                products requires various tests- at least 3 working days are
                                required for the Experts to determine the issues. If there are any
                                issues that fall under our warranty policy, we will follow them
                                accordingly. If our observation could not find any fault, your
                                complaint will not be valid any longer.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ⦿ To claim REPLACEMENT or MONEY BACK GUARANTEE, you have to be
                                present physically at our Outlet & must present the product’s Box
                                with Invoice/Bill. Please preserve the product box & invoice/bill
                                for future reference.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ⦿ To get the refund, minimum of 3 (Three) working days are required
                                to follow the general protocols. Please note, the transaction medium
                                (bank transfer/ mobile banking) for returning the money will be
                                decided solely by the authority of rTech Ltd.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ⦿ 1 Year (One) Free Service Warranty will be provided for
                                Smartphone/ iPad/Tab (parts/ hardware excluded). For any kind of
                                issues in the hardware or on the malfunctioned motherboard of the
                                related device during the service warranty period, you have to bear
                                the expenses for the parts required. The service charge is free of
                                cost for attaching any additional parts. Please note, any servicing
                                on the motherboard is excluded from this facility.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ⦿ 1 Year (One) Free Service Warranty will be provided for TV
                                (without the TV Panel).
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ⦿ If you purchase through any Courier Service, please record an
                                UNBOXING video for future reference to claim any after-sales
                                service. Please note, if you find anything unusual, you must inform
                                us right away. Failure to inform you within the day of receiving the
                                product will exclude you from claiming any replacement facility.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ⦿ rTech Ltd holds the right to change/modify its policies without
                                any prior notice.
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="center">
                            <Typography
                                variant="h5"
                                style={{ textDecoration: 'underline' }}
                                className={classes.headerStyle}
                            >
                                Terms & Conditions of Warranty Claim for Accessories
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="body1" gutterBottom>
                                ⦿ 3 Days of Refund / Replacement guarantee is applicable only for
                                the NON-Warranty Products (which will be mentioned as N/A in the
                                warranty column on the invoice). NON-Warranty Products include
                                various Smart Watches, Air Pods, Bluetooth Speaker & Other
                                Accessories items.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ⦿ This Guarantee will not be valid for any kind of:
                            </Typography>
                            <Grid>
                                <Typography variant="body1" gutterBottom>
                                    ‣ Liquid Damage
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    ‣ Display Issues
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    ‣ Physical Damage such as a scratch on Product & Product
                                    Packaging
                                </Typography>
                            </Grid>
                            <Typography variant="body1" gutterBottom>
                                ⦿ If you find any kind of manufacturing defect(s) on any WARRANTY
                                PRODUCT (which will be mentioned in the warranty column on the
                                invoice) from our outlets/ through delivery, you have to inform us
                                within the purchase day or within 24 hours to get REPLACEMENT.
                                Inability to inform within this time period will cancel the
                                replacement facility and the regular warranty facility will be
                                activated immediately.{' '}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ⦿ To get the refund, a minimum of 3 working days are required to
                                follow the general protocols. Please note, the transaction medium
                                (bank transfer/ mobile banking) for returning the money will be
                                decided by the authority of rTech Ltd.{' '}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ⦿ If your purchased product seems unauthentic to you or you think it
                                is not performing as it should, we will thoroughly examine your
                                product and we will perform a side-by-side comparison with one of
                                our stocked original units. Please be patient as examining any tech
                                products requires various tests- at least 3 working days are
                                required for the Experts to determine the issues. If there are any
                                issues that fall under our warranty policy, we will follow them
                                accordingly. If our observation could not find any fault, your
                                complaint will not be valid any longer.{' '}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ⦿ To claim REPLACEMENT or MONEY BACK GUARANTEE, you have to be
                                present physically at our Outlet & must present the product’s Box
                                with Invoice/Bill. Please preserve the product box & Invoice/Bill
                                for future reference.{' '}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ⦿ If you purchase through any Courier Service, please record an
                                UNBOXING video for future reference to claim any after-sales
                                service. Please note, if you find anything unusual, you must inform
                                us right away. Failure to inform you within the day of receiving the
                                product will exclude you from claiming any replacement facility.{' '}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ⦿ rTech Ltd holds the right to change/modify its policies without
                                any prior notice.
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
}

export default WarrantyAndRefundPolicy;
