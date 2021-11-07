import { Container, Divider, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

function ExchangePolicy() {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={classes.rootCon}>
                <Grid sm={12}>
                    <Paper className={classes.paperStyle}>
                        <Grid align="center">
                            <Typography variant="h4" className={classes.headerStyle}>
                                Exchange Policy
                            </Typography>
                        </Grid>
                        <Divider />
                        <br />
                        <Grid align="start">
                            <Typography variant="body2" gutterBottom>
                                অনেককেই দেখছি আক্ষেপ করে বলতে &quot;ফোন টা ভালো লেগেছে কিন্তু এই
                                মুহূর্তে তো এতো নগদ টাকা তো হাতে নেই, তাছাড়া বর্তমানে যেই মোবাইলটি
                                ব্যবহার করছি নতুন আরেকটি কিনলে ঐটার কি হবে ! &quot; তাই সামর্থ্য
                                থাকা সত্ত্বেও যারা এতদিন পছন্দের ফোনটি কিনতে পারছিলেন না এখন আর
                                তাদের আক্ষেপ করতে হবে না কারণ আমরা আপনাদের কথা ভেবে আমরা Exchange
                                সুবিধা নিয়ে এসেছি।
                            </Typography>
                            <br />
                            <Typography variant="body1" color="primary" gutterBottom>
                                Exchange সুবিধা আসলে কি ?
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                মনে করুন, আপনি Apple iPhone X মডেলটি ব্যবহার করছেন প্রায় ১বছর এখন
                                আপনার 11 Pro Max এই মডেলটি পছন্দ হয়েছে কিন্তু এই মুহূর্তে আপনার হাতে
                                এতো টাকা নেই তাছাড়া নতুন আরেকটি মোবাইল কিনলে বর্তমানে ব্যবহৃত
                                মোবাইলটিও (iPhone X) বা কি করবেন ! আপনার এই চাহিদার কথা মাথায় রেখেই
                                আমরা নিয়ে এসেছি Exchange সুবিধা ! এখন থেকে আপনি চাইলেই আমাদের শপ
                                থেকে আপনার পুরনো মোবাইলটি Exchange করে নতুন আরেকটি মোবাইল কিনতে
                                পারবেন।
                            </Typography>
                            <br />
                            <Typography variant="body1" color="primary" gutterBottom>
                                Exchange সুবিধা পাওয়ার জন্য কিছু শর্ত পূরণ করতে হবে ঃ
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ১. মোবাইলটিকে অবশ্যই অরিজিনাল হতে হবে এবং এর IMEI ম্যাচিং বক্স থাকতে
                                হবে।
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ২. iPhone ছাড়া Android ফোন গুলো বাজারে চাহিদা আছে এরকম মডেল হতে হবে
                                বা ২০২০ সালের মডেল হতে হবে।
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৩. iPhone এর ক্ষেত্রে ব্যাটারি লাইফ ৮৫%-৯৫% হতে হবে। এর নিচে থাকলে
                                আমরা গ্রহন করবো না।
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৪. মোবাইলটি রিফারভিশড (Refurbished) হতে পারবে না এবং এর কোন ধরনের
                                অভ্যন্তরীণ বা বাহ্যিক সমস্যা থাকলে অথবা এর বডিতে কোন অতিরিক্ত দাগ
                                থাকলেও এটি গ্রহনযোগ্য হবে না।
                            </Typography>

                            <br />
                            <Typography variant="body1" color="primary" gutterBottom>
                                Exchange আসলে কিভাবে করা হবে ?
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                প্রথমে আপনার মোবাইলটি দেখার পর কন্ডিশন অনুযায়ী এটির একটি মূল্য
                                নির্ধারন করা হবে, এরপর আপনি চাইলে সেই মূল্যের সাথে অতিরিক্ত টাকা যোগ
                                করে যে কোন মোবাইল কিনতে পারবেন। এছাড়াও আপনি চাইলে অবশিষ্ট মূল্য নগদ
                                ছাড়াও ক্রেডিট কার্ডের মাধ্যমে ই এম আই (EMI) সুবিধার মাধ্যমে পরিশোধ
                                করতে পারবেন।
                            </Typography>
                            <br />
                            <Typography variant="h6" color="error" gutterBottom>
                                বিঃদ্রঃ আপনার ডিভাইসটির মূল্য কত ধরা হবে তা আসলে সরাসরি না দেখে
                                ধারণা দেওয়া সম্ভব নয় কেননা অনেক সময় ফোন কলে অনুমানের ভিত্তিতে দাম
                                বললে ভুল হওয়ার সম্ভাবনা বেশি হয় তাই এক্সচেঞ্জ করতে চাইলে ডিভাইসটি
                                নিয়ে অবশ্যই আমাদের শপ নিয়ে আসতে হবে।{' '}
                            </Typography>
                            <br />
                            <br />
                            <Typography variant="h5" color="secondary" gutterBottom>
                                এক্সচেঞ্জ করতে আসার সময় অবশ্যই আপনার এন আই ডি কার্ড অথবা ছবি সম্বলিত
                                কোনো পরিচয়পত্র নিয়ে আসবেন ।
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
}

export default ExchangePolicy;
