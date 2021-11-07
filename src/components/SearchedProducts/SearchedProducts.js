/* eslint-disable no-unused-vars */
// eslint-disable-next-line prettier/prettier
import { Button, CircularProgress, CssBaseline, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Slider, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { React, useState } from 'react';
import Products from '../Products/Products';
import './errorPage.css';
import useStyles from './styles';

function valuetext(value) {
    return `Tk ${value}`;
}
const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = withStyles({
    root: {
        color: '#3880ff',
        height: 2,
        padding: '30px 0 10px 0',
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        marginTop: -14,
        marginLeft: -14,
        '&:focus, &:hover, &$active': {
            boxShadow:
                '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 12px)',
        top: -15,
        '& *': {
            background: 'transparent',
            color: 'red',
            fontSize: 'small',
            fontFamily: 'Nunito Sans,sans-serif',
            fontWeight: 'bold',
        },
    },
})(Slider);

export default function SpacingGrid({
    products,
    onAddToCart,
    handleProductDetails,
    searchTerm,
    sTerm,
    sRangeKeyword,
    sSortValue,
    sSortKey,
    sNotFound,
}) {
    const classes = useStyles();
    const [sortBy, setSortBy] = useState('');
    const [value, setValue] = useState([0, 200000]);

    const rangeHandleChange = (event, newValue) => {
        setValue(newValue);
        sRangeKeyword(newValue);
    };

    const handleChange = (event) => {
        setSortBy(event.target.value);
        sSortKey(event.target.value);
    };
    /*     console.log('sort value', sortBy);
    console.log('value', value);

    console.log('Original Products', products); */
    return (
        <>
            {sNotFound ? (
                <div className="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <h1>Oops!</h1>
                            <h2>Products can&apos;t be found</h2>
                        </div>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => window.location.reload(false)}
                        >
                            RELOAD
                        </Button>
                    </div>
                </div>
            ) : (
                <>
                    {products.length !== 0 ? (
                        <>
                            <CssBaseline />
                            <div className={classes.root}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4} md={3}>
                                        {/* <Paper elevation={0} className={classes.paper1}> */}
                                        <section>
                                            <div className={classes.filter}>
                                                <Typography
                                                    variant="h6"
                                                    color="primary"
                                                    className={classes.filterText}
                                                >
                                                    Filter
                                                </Typography>
                                            </div>

                                            <Divider />
                                            <div>
                                                <div className={classes.filter}>
                                                    <Typography
                                                        id="range-slider"
                                                        className={classes.filterText}
                                                        gutterBottom
                                                        style={{ paddingTop: '10px' }}
                                                    >
                                                        Price Range
                                                    </Typography>
                                                </div>
                                                <div className={classes.range}>
                                                    <IOSSlider
                                                        value={sTerm}
                                                        onChange={rangeHandleChange}
                                                        valueLabelDisplay="on"
                                                        aria-label="ios slider"
                                                        aria-labelledby="range-slider"
                                                        getAriaValueText={valuetext}
                                                        min={0}
                                                        max={200000}
                                                    />
                                                </div>
                                            </div>
                                        </section>
                                        {/* </Paper> */}
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={9}>
                                        {/*  <Paper elevation={0} className={classes.paper2}> */}
                                        <section>
                                            <div className={classes.Text}>
                                                <div>
                                                    <Typography
                                                        variant="h5"
                                                        color="primary"
                                                        className={classes.CategoryName}
                                                    >
                                                        Showing products from <b>{searchTerm}!</b>
                                                    </Typography>
                                                    <Typography className={classes.ProductAmount}>
                                                        {products.length} Products Found for{' '}
                                                        {searchTerm}!
                                                    </Typography>
                                                </div>

                                                <FormControl
                                                    variant="outlined"
                                                    className={classes.formControl}
                                                >
                                                    <InputLabel id="demo-simple-select-outlined-label">
                                                        Sort By
                                                    </InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        value={sSortValue}
                                                        onChange={handleChange}
                                                        label="Sort By"
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10}>Low to High</MenuItem>
                                                        <MenuItem value={20}>High to Low</MenuItem>
                                                        <MenuItem value={30}>Name(A - Z)</MenuItem>
                                                        <MenuItem value={40}>Name(Z - A)</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className={classes.product}>
                                                <Products
                                                    products={products}
                                                    onAddToCart={onAddToCart}
                                                    handleProductDetails={handleProductDetails}
                                                />
                                            </div>
                                        </section>
                                        {/*  </Paper> */}
                                    </Grid>
                                </Grid>
                            </div>
                        </>
                    ) : (
                        <div className={classes.spinner}>
                            <CircularProgress />
                        </div>
                    )}
                </>
            )}
        </>
    );
}
