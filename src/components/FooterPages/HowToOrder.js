import { Container, Divider, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

function HowToOrder() {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg" className={classes.rootCon}>
                <Grid sm={12}>
                    <Paper className={classes.paperStyle}>
                        <Grid align="center">
                            <Typography variant="h4" className={classes.headerStyle}>
                                Process of Placing any order
                            </Typography>
                        </Grid>
                        <Divider />
                        <br />
                        <Grid align="start">
                            <Typography variant="h5" style={{ color: '#ff9c00' }} gutterBottom>
                                <span role="img" aria-label="Gadgets">
                                    🎧
                                </span>{' '}
                                এক্সেসরিজ / Gadgets এর ক্ষেত্রে{' '}
                                <span role="img" aria-label="Gadgets">
                                    🎧
                                </span>
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="h6" color="secondary" gutterBottom>
                                আপনি যদি ঢাকার বাহিরে /Outside Dhaka থাকেন, সেক্ষেত্রে সুন্দরবন
                                কুরিয়ার সার্ভিসের মাধ্যমে কাঙ্ক্ষিত এক্সেসরিজ/ Accessories সংগ্রহ
                                করতে পারবেন। ঢাকার বাহিরে প্রোডাক্ট কুরিয়ারে নিতে চাইলে আপনাকে
                                নিম্নোক্ত বিষয়গুলো খেয়াল রাখতে হবেঃ
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="body2" gutterBottom>
                                ১. অগ্রিম/Advance ৩০০(তিনশত) টাকা দিয়ে কাঙ্ক্ষিত এক্সেসরিজ/
                                Accessories অর্ডার কনফার্ম করতে হবে। (ক্ষেত্র বিশেষে Premium
                                Accessories- এর জন্য অগ্রিম টাকার পরিমাণ পরিবর্তন হতে পারে)
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ২. অবশিষ্ট টাকা Cash On Delivery (COD) -এর মাধ্যমে পরিশোধ করতে
                                পারবেন।
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৩. আপনি যদি আপনার অর্ডার করা পণ্যের সম্পূর্ণ মুল্য অগ্রিম পরিশোধ
                                করেন, তাহলে আপনার ঠিকানার নিকটস্থ সুন্দরবনের যে কোনো শাখায় পণ্যটি
                                পৌছে দেয়া হবে। আর যদি ৩০০ টাকা দিয়ে Cash On Delivery করেন, তাহলে
                                শুধুমাত্র আপনার নিকটস্থ সদর শাখায় যাবে।{' '}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৪. খেয়াল করুন, যদি আপনার অর্ডার করা পণ্যের মূল্য ৩০০০ হাজার টাকার
                                বেশি হয়, তাহলে প্রতি হাজারে ১০ টাকা করে কন্ডিশন চার্জ যুক্ত হবে এবং
                                সাথে কুরিয়ারে চার্জ তো থাকছেই। অর্থাৎ, ৩০০০ টাকার বেশি পণ্যের
                                ক্ষেত্রেঃ প্রতি হাজারে ১০ টাকা + কুরিয়ার খরচ। কন্ডিশন এর ক্ষেত্রে
                                ১০০০ টাকা মুল্যের কম কোনো প্রোডাক্ট কন্ডিশন (Cash On Delivery) এ
                                কুরিয়ার হবে না। সেক্ষেত্রে ফুল পেমেন্ট অ্যাডভান্স প্রদান করে অর্ডার
                                কনফার্ম করতে হবে।{' '}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৫. Warranty Claim/ওয়ারেন্টি সুবিধা নিতে চাইলে অবশ্যই প্রোডাক্ট টি
                                হাতে পাওয়ার পর প্রোডাক্ট এর বক্স খোলার সময় Unboxing Video করতে হবে ,
                                আপনি যেদিন পণ্য হাতে পাবেন, সেদিন থেকে ওয়ারেন্টির দিন গণনা শুরু হবে।
                                নির্দিষ্ট সময়সীমার মধ্যে কোনো সমস্যা/ ত্রুটি ধরা পড়লে অবশ্যই আমাদের
                                অভিযোগ করার জন্য নির্দিষ্ট ফোন নাম্বারে জানাতে হবে। এরপর rTech Ltd-র
                                ঠিকানায় কুরিয়ার করে পণ্যটি পাঠাতে হবে। আমরা যাচাই করে আপনাকে আবার
                                নতুন পণ্য কুরিয়ার করে পাঠিয়ে দিবো। খেয়াল রাখুন, প্রথমবারের কুরিয়ার
                                খরচ আপনার, পরের বারের কুরিয়ার খরচ আমাদের।{' '}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৬. অগ্রিম প্রদান করার পর যদি আপনি আপনার ব্যাক্তিগত সমস্যার কারণে
                                অর্ডার করা পণ্যটি সংগ্রহ করতে ব্যর্থ হন, তবে rTech Ltd- কোনো দায়ভার
                                বহন করবে না এবং আপনার অগ্রিম করা পুরো Amount ফেরত দিতে আমরা বাধ্য
                                থাকবো না। কুরিয়ারের নির্ধারিত সময়ের মধ্যে পণ্য না নিতে পারার কারণে
                                যদি আপনি পুনরায় পণ্যটি পেতে চান, তবে আবার সংশ্লিষ্ট খরচ সহ কুরিয়ার
                                চার্জ আপনাকেই বহন করতে হবে।{' '}
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="h6" style={{ color: '#0000ff' }} gutterBottom>
                                আপনি ঢাকা মহানগরের/Inside Dhaka যে প্রান্তেই থাকুন না কেন, অর্ডার
                                কনফার্ম করার ৪৮-৭২ ঘন্টার মধ্যে কাঙ্ক্ষিত এক্সেসরিজ/ accessories
                                হাতে পেয়ে মূল্য পরিশোধের সুযোগ থাকছে। ঢাকার ভেতরে প্রোডাক্ট কুরিয়ারে
                                নিতে চাইলে আপনাকে নিম্নোক্ত বিষয়গুলো খেয়াল রাখতে হবেঃ
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="body2" gutterBottom>
                                ১. অগ্রিম/ Advance ৩০০(তিনশত) টাকা দিয়ে কাঙ্ক্ষিত এক্সেসরিজ/
                                Accessories অর্ডার কনফার্ম করতে হবে। অবশিষ্ট টাকা Cash On Delivery
                                (COD) -এর মাধ্যমে পরিশোধ করতে পারবেন।
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ২. ক্ষেত্র বিশেষে Accessories এর ডেলিভারি চার্জ ১০০ টাকা পর্যন্ত এবং
                                Premium Accessories- এর জন্য ডেলিভারি চার্জ ২৫০ টাকা পর্যন্ত হতে
                                পারে (জরুরি কুরিয়ার/ On Day Delivery/ Emergency Delivery এর ক্ষেত্রে
                                দ্বিগুণ কুরিয়ার চার্জ প্রযোজ্য হবে )।
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৩. ঢাকার ভেতরের পণ্যের জন্য ওয়ারেন্টি সুবিধা নিতে চাইলে আপনাকে
                                স্ব-শরীরে কিংবা উপযুক্ত প্রতিনিধি কে পণ্যসহ বসুন্ধরা সিটির Level:6,
                                Block: A, Shop:7 & 8 এ হাজির হতে হবে।
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৪. Warranty Claim/ওয়ারেন্টি সুবিধা নিতে চাইলে অবশ্যই প্রোডাক্ট টি
                                হাতে পাওয়ার পর প্রোডাক্ট এর বক্স খোলার সময় Unboxing Video করতে হবে ,
                                আপনি যেদিন পণ্য হাতে পাবেন, সেদিন থেকে ওয়ারেন্টির দিন গণনা শুরু হবে।
                                নির্দিষ্ট সময়সীমার মধ্যে কোনো সমস্যা/ ত্রুটি ধরা পড়লে অবশ্যই আমাদের
                                অভিযোগ করার জন্য নির্দিষ্ট ফোন নাম্বারে জানাতে হবে। এরপর rTech Ltd-র
                                ঠিকানায় কুরিয়ার করে পণ্যটি পাঠাতে হবে। আমরা যাচাই করে আপনাকে আবার
                                নতুন পণ্য কুরিয়ার করে পাঠিয়ে দিবো। খেয়াল রাখুন, প্রথমবারের কুরিয়ার
                                খরচ আপনার, পরের বারের কুরিয়ার খরচ আমাদের।
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="h5" style={{ color: '#ff9c00' }} gutterBottom>
                                <span role="img" aria-label="Mobile">
                                    📱
                                </span>{' '}
                                মোবাইল এর ক্ষেত্রে{' '}
                                <span role="img" aria-label="Mobile">
                                    📱
                                </span>
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="h6" color="secondary" gutterBottom>
                                আপনি যদি ঢাকার বাহিরে/ Outside Dhaka থাকেন, সেক্ষেত্রে সুন্দরবন
                                কুরিয়ার সার্ভিসের মাধ্যমে কাঙ্ক্ষিত মোবাইল ফোনটি সংগ্রহ করতে পারবেন।
                                আপনাকে নিম্নোক্ত বিষয়গুলো খেয়াল রাখতে হবেঃ
                            </Typography>
                        </Grid>

                        <br />
                        <Grid align="start">
                            <Typography variant="h6" gutterBottom>
                                আপনি যদি কন্ডিশনে/Cash On Delivery (COD) প্রোডাক্টটি নিতে আগ্রহী হয়ে
                                থাকেন তাহলে নিম্নোক্ত বিষয়গুলো খেয়াল রাখতে হবেঃ
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="body2" gutterBottom>
                                ১. ৩০,০০০ টাকা এবং এর নিম্নের দামের কোন ফোনের জন্য আপনাকে ১,০০০/-
                                টাকা Advance করতে হবে।
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ২. ৩০,০০০ - ৬০,০০০ টাকার ফোনের জন্য আপনাকে ২,০০০/- টাকা Advance করতে
                                হবে।
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৩. ৬০,০০০ টাকার (বেশি) ফোনের জন্য আপনাকে ৩,০০০/- টাকা Advance করতে
                                হবে।
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৪. নির্দিষ্ট অগ্রিম/Advance প্রদান করার পর বাকি টাকায় প্রতি হাজারে
                                ১০ টাকা করে কন্ডিশন চার্জ যুক্ত হবে এবং সাথে কুরিয়ারে চার্জ ২০০ টাকা
                                যুক্ত হবে । অর্থাৎ, আপনাকে অবশিষ্ট পণ্যের মূল্য ,কন্ডিশন চার্জ এবং
                                কুরিয়ারের চার্জ প্রদান করে কুরিয়ার থেকে প্রোডাক্ট সংগ্রহ করতে হবে ।
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৫. এই ক্ষেত্রে শুধু মাত্র সুন্দরবন কুরিয়ার সার্ভিসের সদর শাখা গুলো
                                থেকে প্রোডাক্ট সংগ্রহ করতে পারবেন ।
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৬. ৪৮ থেকে ৭২ ঘণ্টার মধ্যে প্রোডাক্ট সংগ্রহ করতে পারবেন ।
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="h6" gutterBottom>
                                আপনি যদি Full Payment করে অর্ডার কনফার্ম করতে নিম্নোক্ত বিষয়গুলো
                                খেয়াল রাখতে হবেঃ
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="body2" gutterBottom>
                                ১. আপনি প্রোডাক্ট Full Payment করে অর্ডার কনফার্ম করতে পারেন
                                ,সেক্ষেত্রে প্রোডাক্ট মূল্য এবং কুরিয়ারে চার্জ প্রদান করে কুরিয়ার
                                থেকে প্রোডাক্ট সংগ্রহ করতে হবে ।
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ২. এই ক্ষেত্রে কন্ডিশন চার্জ যুক্ত হবে না ।
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৩. ৪৮ থেকে ৭২ ঘণ্টার মধ্যে প্রোডাক্ট সংগ্রহ করতে পারবেন ।
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="h5" style={{ color: '#0000ff' }} gutterBottom>
                                আপনি Inside Dhaka/ ঢাকা মহানগরের যে প্রান্তেই থাকুন না কেন, ঢাকার
                                ভেতরে প্রোডাক্ট হোম ডেলিভারি নিতে চাইলে আপনাকে নিম্নোক্ত বিষয়গুলো
                                খেয়াল রাখতে হবেঃ
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="h6" gutterBottom>
                                আপনি যদি Cash On Delivery (COD)-তে প্রোডাক্টটি নিতে আগ্রহী হয়ে থাকেন
                                তাহলে নিম্নোক্ত বিষয়গুলো খেয়াল রাখতে হবেঃ
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="body2" gutterBottom>
                                ১. ৩০,০০০ টাকা এবং এর নিম্নের দামের কোন ফোনের জন্য আপনাকে ১,০০০/-
                                টাকা Advance করতে হবে।{' '}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ২. ৩০,০০০ - ৬০,০০০ টাকার ফোনের জন্য আপনাকে ২,০০০/- টাকা Advance করতে
                                হবে।
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৩. ৬০,০০০ টাকার (বেশি) ফোনের জন্য আপনাকে ৩,০০০/- টাকা Advance করতে
                                হবে।
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৪. নির্দিষ্ট অগ্রিম/Advance প্রদান করার পর পণ্যের বাকি টাকা এবং
                                ডেলিভারি চার্জ প্রোডাক্ট হাতে পেয়ে প্রদান করতে পারবেন। অর্থাৎ,
                                আপনাকে অবশিষ্ট পণ্যের মূল্য এবং ডেলিভারি চার্জ ২৫০ টাকা প্রদান করতে
                                হবে । (জরুরি কুরিয়ার/ On Day Delivery/ Emergency Delivery এর
                                ক্ষেত্রে দ্বিগুণ কুরিয়ার চার্জ প্রযোজ্য হবে )
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৫. ৪৮ থেকে ৭২ ঘণ্টার মধ্যে প্রোডাক্ট সংগ্রহ করতে পারবেন ।
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="h6" gutterBottom>
                                আপনি যদি Full Payment করে অর্ডার কনফার্ম করতে চান তাহলে নিম্নোক্ত
                                বিষয়গুলো খেয়াল রাখতে হবেঃ
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="body2" gutterBottom>
                                ১. আপনি প্রোডাক্টটি Full Payment করে অর্ডার কনফার্ম করতে পারেন
                                ,সেক্ষেত্রে প্রোডাক্ট মূল্য এবং ডেলিভারি চার্জ প্রদান করতে হবে ।
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ২. ৪৮ থেকে ৭২ ঘণ্টার মধ্যে প্রোডাক্ট সংগ্রহ করতে পারবেন ।
                            </Typography>
                        </Grid>
                        <br />
                        <br />
                        <Grid align="start">
                            <Typography variant="h6" color="primary" gutterBottom>
                                Payment Options
                            </Typography>
                        </Grid>
                        <br />
                        <Grid align="start">
                            <Typography variant="body2" gutterBottom>
                                ১. Bkash (With Charge)
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ২. Nagad (With Charge)
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৩. Rocket (With Charge)
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৪. Bank Transfer (For Few Selected Banks Only)
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                ৫. SSL Payment Gateway (Visa, MasterCard, American Express, Union
                                Pay)
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
}

export default HowToOrder;
