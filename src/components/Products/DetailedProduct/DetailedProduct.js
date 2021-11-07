// eslint-disable-next-line prettier/prettier
import { Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, CssBaseline, Divider, IconButton } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
/* import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'; */
import LocalMallIcon from '@material-ui/icons/LocalMall';
import VisibilityIcon from '@material-ui/icons/Visibility';
import React from 'react';
import Rating from '../Product/Rating/Rating';
import useStyles from './styles';

export default function DetailedProduct({ item, onAddToCart, handleProductDetails }) {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="lg" className={classes.rootCon}>
                {Object.keys(item).length !== 0 ? (
                    <>
                        <CssBaseline />
                        <div className={classes.root}>
                            <Paper className={classes.paper}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img
                                                className={classes.img}
                                                alt="complex"
                                                src={item.media.source}
                                                title={item.name}
                                            />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs style={{ textAlign: 'justify' }}>
                                                <Typography
                                                    gutterBottom
                                                    variant="subtitle1"
                                                    style={{
                                                        fontFamily: 'Nunito Sans,sans-serif',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    {item.name}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    gutterBottom
                                                    style={{
                                                        fontFamily: 'Nunito Sans,sans-serif',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    {item.price.formatted_with_symbol}
                                                </Typography>
                                                <Typography
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.description,
                                                    }}
                                                    variant="body2"
                                                    color="textSecondary"
                                                    style={{
                                                        fontFamily: 'Nunito Sans,sans-serif',
                                                        fontWeight: 'bold',
                                                    }}
                                                ></Typography>
                                            </Grid>
                                            <div className={classes.Button}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    fontSize="large"
                                                    onClick={() => onAddToCart(item.id, 1)}
                                                >
                                                    Add to Cart
                                                </Button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>

                        <div>
                            <div className={classes.toolbar} />
                            <Typography
                                variant="h5"
                                color="primary"
                                style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                                gutterBottom
                                /* className={classes.text} */
                            >
                                Related Products
                            </Typography>
                            <Grid container justify="center" spacing={4}>
                                {item.related_products.map((product) => (
                                    <Grid item key={product.id} xm={12} sm={6} md={4} lg={3}>
                                        <Card className={classes.rootCard}>
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
                                                        style={{
                                                            fontFamily: 'Nunito Sans,sans-serif',
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        {product.name}
                                                    </Typography>
                                                </div>
                                                <Typography
                                                    variant="body2"
                                                    style={{
                                                        fontFamily: 'Nunito Sans,sans-serif',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    {product.price.formatted_with_symbol}
                                                </Typography>
                                                <Typography style={{ justifyContent: 'center' }}>
                                                    {' '}
                                                    <Rating />{' '}
                                                </Typography>
                                            </CardContent>
                                            <Divider />
                                            <CardActions
                                                disableSpacing
                                                className={classes.CardActions}
                                            >
                                                <div className={classes.buttons}>
                                                    <IconButton>
                                                        <LocalMallIcon
                                                            color="primary"
                                                            fontSize="large"
                                                            onClick={() =>
                                                                onAddToCart(product.id, 1)
                                                            }
                                                        />
                                                    </IconButton>
                                                </div>
                                                <IconButton aria-label="Show cart items">
                                                    <VisibilityIcon
                                                        color="secondary"
                                                        fontSize="large"
                                                        onClick={() =>
                                                            handleProductDetails(product.id)
                                                        }
                                                    />
                                                </IconButton>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </>
                ) : (
                    <div className={classes.spinner}>
                        <CircularProgress />
                    </div>
                )}
            </Container>
        </>
    );
}
