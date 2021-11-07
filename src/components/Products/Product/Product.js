// eslint-disable-next-line prettier/prettier
/* import 'fontsource-roboto'; */
import '@fontsource/roboto';
import { Card, CardActions, CardContent, CardMedia, Divider, IconButton } from '@material-ui/core';
// eslint-disable-next-line import/no-duplicates
import Typography from '@material-ui/core/Typography';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import VisibilityIcon from '@material-ui/icons/Visibility';
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating/Rating';
import useStyle from './styles';

const Product = ({ product, onAddToCart, handleProductDetails }) => {
    const classes = useStyle();
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={product.media.source}
                title={product.name}
            />
            <Divider />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography
                        variant="body1"
                        gutterBottom
                        style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                    >
                        {product.name}
                    </Typography>
                </div>
                <Typography
                    variant="body2"
                    style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                >
                    {product.price.formatted_with_symbol}
                </Typography>
                <Typography style={{ justifyContent: 'center' }}>
                    {' '}
                    <Rating />{' '}
                </Typography>
            </CardContent>
            <Divider />
            <CardActions disableSpacing className={classes.CardActions}>
                <div className={classes.buttons}>
                    <IconButton>
                        <LocalMallIcon
                            color="primary"
                            fontSize="large"
                            onClick={() => onAddToCart(product.id, 1)}
                        />
                    </IconButton>
                </div>
                <IconButton aria-label="Show cart items" component={Link} to="/detailedProduct">
                    <VisibilityIcon
                        color="secondary"
                        fontSize="large"
                        onClick={() => handleProductDetails(product.id)}
                    />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;
