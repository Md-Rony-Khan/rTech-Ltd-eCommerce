import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        /* flexDirection: 'column', */
        justifyContent: 'center',
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
}));

export default function HalfRating() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/*  <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
        </div>
    );
}
