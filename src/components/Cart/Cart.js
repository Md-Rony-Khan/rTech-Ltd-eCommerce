import { Button, Container, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();
    const EmptyCart = () => (
        <Typography
            variant="subtitle1"
            style={{
                fontFamily: 'Nunito Sans,sans-serif',
                fontWeight: 'bold',
            }}
        >
            You have no items in your cart.{' '}
            <Link to="/" className={classes.link}>
                Start Adding Some!
            </Link>
        </Typography>
    );
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <CartItem
                            item={item}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cartDetails}>
                <Typography
                    variant="h5"
                    style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                >
                    SUBTOTAL: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button
                        className={classes.emptyButton}
                        size="large"
                        type="button"
                        variant="contained"
                        color="secondary"
                        onClick={handleEmptyCart}
                    >
                        Empty Cart
                    </Button>
                    <Button
                        component={Link}
                        to="/checkout"
                        className={classes.checkoutButton}
                        size="large"
                        type="button"
                        variant="contained"
                        color="primary"
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    );

    if (!cart.line_items) return 'Loading....';
    return (
        <Container maxWidth="lg" className={classes.rootCon}>
            <Typography variant="h4" color="primary" className={classes.text}>
                Your Shopping Cart
            </Typography>
            <Divider />
            <div className={classes.toolbar} />
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    );
};

export default Cart;
