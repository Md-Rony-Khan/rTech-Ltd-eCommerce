import { Container, Divider, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

function TermsAndConditions() {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={classes.rootCon}>
                <Grid sm={12}>
                    <Paper className={classes.paperStyle}>
                        <Grid align="center">
                            <Typography variant="h6" className={classes.headerStyle}>
                                অর্ডার এর অগ্রিম গ্রহণ এবং ডেলিভারি চার্জ সংক্রান্ত নিয়মাবলী (সীমিত
                                সময়ের জন্য)
                            </Typography>
                        </Grid>
                        <Divider />
                        <br />
                        <Grid align="start">
                            <Typography variant="body1" gutterBottom>
                                ১. যেকোনো প্রোডাক্টের অর্ডার গ্রহণের ক্ষেত্রে অগ্রিম গ্রহণের পরিমাণ
                                :
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {'    '}⚫ ১০০/- থেকে ৪,৯৯৯/- টাকা মূল্যের যে কোনো প্রোডাক্টের এর
                                জন্য: ৩০৫/- টাকা
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {'    '}⚫ ৫,০০০/- থেকে ৪৯,৯৯৯/- টাকা মূল্যের যে কোনো প্রোডাক্টের এর
                                জন্য: ১,০১৫/- টাকা
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {'    '}⚫ ৫০,০০০/- টাকার বেশি মূল্যের যে কোনো প্রোডাক্টের এর জন্য:
                                ২,০৩০/- টাকা
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ২. ইনসাইড ঢাকা বা ঢাকা সিটির ভিতরে যেকোনো ডিভাইসের
                                (মোবাইল/ট্যাব/ল্যাপটপ) ডেলিভারি ফি/চার্জ একদম ফ্রি অর্থাৎ কোনো চার্জ
                                প্রযোজ্য হবেনা।
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ৩. ইনসাইড ঢাকা বা ঢাকা সিটির ভিতরে যেকোনো এক্সেসরিজ আইটেম এর ফুল
                                পেমেন্ট করলে ডেলিভারি ফি/চার্জ একদম ফ্রি অর্থাৎ কোনো চার্জ প্রযোজ্য
                                হবেনা আর যদি পার্শিয়াল পেমেন্ট করা হয় সেক্ষেত্রে ডেলিভারি চার্জ ৬০/-
                                টাকা এবং নেক্সট ডে ডেলিভার করা হবে অর্থাৎ যেদিন অর্ডার করা হবে তারপর
                                দিনই প্রোডাক্টটি ডেলিভার করা হবে (ক্ষেত্র বিশেষে পরিবর্তন হতে পারে)।
                                বি:দ্র: যেকোনো প্রোডাক্টের অর্ডার অবশ্যই বিকাল ৫.০০টার মধ্যে প্লেস
                                করতে হবে। বিকাল ৫.০০টার পর কোনো প্রোডাক্টের অর্ডার পরবর্তী দিনের
                                অর্ডার হিসেবে গণ্য করা হবে।
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ৪. আউটসাইড ঢাকা বা ঢাকার বাইরে যেকোনো ডিভাইসের জন্য যদি ফুল পেমেন্ট
                                করা হয় তাহলে ডেলিভারি চার্জ ফ্রি কিন্তু যদি পার্শিয়াল পেমেন্ট করা হয়
                                সেক্ষেত্রে ডেলিভারি চার্জ ২০০/- টাকা এবং ক্ষেত্র বিশেষে এর সাথে
                                কন্ডিশন চার্জ প্রযোজ্য হবে কুরিয়ার কোম্পানির নিয়ম অনুযায়ী।
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                ৫. আউটসাইড ঢাকা বা ঢাকার বাইরে যেকোনো এক্সেসরিজ জন্য যদি ফুল পেমেন্ট
                                করা হয় তাহলে ডেলিভারি চার্জ ফ্রি কিন্তু যদি পার্সিয়াল পেমেন্ট করা হয়
                                সেক্ষেত্রে ডেলিভারি চার্জ ১০০/- টাকা এবং ক্ষেত্র বিশেষে এর সাথে
                                কন্ডিশন চার্জ প্রযোজ্য হবে কুরিয়ার কোম্পানির নিয়ম অনুযায়ী।
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
}

export default TermsAndConditions;
