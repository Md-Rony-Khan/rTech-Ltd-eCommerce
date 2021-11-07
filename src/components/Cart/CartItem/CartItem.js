import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={item.media.source} title={item.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography
                        variant="body1"
                        gutterBottom
                        style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                    >
                        {item.name}
                    </Typography>
                </div>
                <Typography
                    variant="body2"
                    style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                >
                    {item.line_total.formatted_with_symbol}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button
                        type="button"
                        size="small"
                        onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
                    >
                        -
                    </Button>
                    <Typography
                        style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                    >
                        {item.quantity}
                    </Typography>
                    <Button
                        type="button"
                        size="small"
                        onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
                    >
                        +
                    </Button>
                </div>
                <Button
                    variant="contained"
                    type="button"
                    color="secondary"
                    onClick={() => handleRemoveFromCart(item.id)}
                >
                    Remove
                </Button>
            </CardActions>
        </Card>
    );
};

export default CartItem;
