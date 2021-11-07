import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import React from 'react';

const Review = ({ checkoutToken }) => (
    <>
        <Typography
            variant="h6"
            gutterBottom
            style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
        >
            Order summary
        </Typography>
        <List disablePadding>
            {checkoutToken.live.line_items.map((product) => (
                <ListItem style={{ padding: '10px 0' }} key={product.name}>
                    <ListItemText
                        primary={product.name}
                        secondary={`Quantity: ${product.quantity}`}
                    />
                    <Typography
                        variant="body2"
                        style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                    >
                        {product.line_total.formatted_with_symbol}
                    </Typography>
                </ListItem>
            ))}
            <ListItem style={{ padding: '10px 0' }}>
                <ListItemText primary="Total" />
                <Typography
                    variant="subtitle1"
                    style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                >
                    {checkoutToken.live.subtotal.formatted_with_symbol}
                </Typography>
            </ListItem>
        </List>
    </>
);

export default Review;
