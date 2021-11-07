import { Container, CssBaseline, Grid } from '@material-ui/core';
import React from 'react';
import Product from './Product/Product';
import useStyle from './styles';

const Products = ({ products, onAddToCart, handleProductDetails }) => {
    const classes = useStyle();

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" className={classes.rootCon}>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Grid container justify="center" spacing={4} className={classes.grid}>
                        {products.map((product) => (
                            <Grid item key={product.id} xm={12} sm={6} md={4} lg={3}>
                                <Product
                                    product={product}
                                    onAddToCart={onAddToCart}
                                    handleProductDetails={handleProductDetails}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </main>
            </Container>
        </>
    );
};

export default Products;
