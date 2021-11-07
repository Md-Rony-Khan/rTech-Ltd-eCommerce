import { CircularProgress, Paper, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div role="tabpanel" hidden={value !== index}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles({
    root: {
        flexGrow: 2,
        justifyContent: 'center',
    },
    rootDiv: {
        padding: '20px',
    },
});

export default function CenteredTabs({
    products,
    fetchTopSellingProducts,
    onAddToCart,
    handleProductDetails,
    loading,
}) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [slug, setSlug] = useState('top-selling');
    /*   console.log(`value out: ${value}`);
    console.log(`Slug out: ${slug}`); */

    const handleChange = (event, newValue) => {
        setValue(newValue);

        switch (newValue) {
            case 0:
                setSlug('top-selling');
                break;
            case 1:
                setSlug('iphone');
                break;
            case 2:
                setSlug('samsung');
                break;
            case 3:
                setSlug('keyboard');
                break;
            case 4:
                setSlug('smart-watch');
                break;
            default:
                setSlug('top-selling');
                break;
        }
    };
    const handleClick = () => {
        fetchTopSellingProducts(slug);
    };
    useEffect(() => {
        setTimeout(() => {
            handleClick();
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, slug]);
    return (
        <>
            <div className={classes.rootDiv}>
                <Paper elevation={0} className={classes.root}>
                    <Typography
                        variant="h5"
                        color="primary"
                        style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                    >
                        Top Selling
                    </Typography>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        onClick={handleClick}
                        aria-label="simple tabs example"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab
                            label="All"
                            style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                        />
                        <Tab
                            label="Apple"
                            style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                        />
                        <Tab
                            label="Samsung"
                            style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                        />
                        <Tab
                            label="Keyboard"
                            style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                        />
                        <Tab
                            label="Smart Watch"
                            style={{ fontFamily: 'Nunito Sans,sans-serif', fontWeight: 'bold' }}
                        />
                    </Tabs>
                </Paper>
                <TabPanel value={value} index={0}>
                    {loading ? (
                        <Products
                            products={products}
                            onAddToCart={onAddToCart}
                            handleProductDetails={handleProductDetails}
                        />
                    ) : (
                        <div className={classes.spinner}>
                            <CircularProgress />
                        </div>
                    )}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {loading ? (
                        <Products
                            products={products}
                            onAddToCart={onAddToCart}
                            handleProductDetails={handleProductDetails}
                        />
                    ) : (
                        <div className={classes.spinner}>
                            <CircularProgress />
                        </div>
                    )}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {loading ? (
                        <Products
                            products={products}
                            onAddToCart={onAddToCart}
                            handleProductDetails={handleProductDetails}
                        />
                    ) : (
                        <div className={classes.spinner}>
                            <CircularProgress />
                        </div>
                    )}
                </TabPanel>
                <TabPanel value={value} index={3}>
                    {loading ? (
                        <Products
                            products={products}
                            onAddToCart={onAddToCart}
                            handleProductDetails={handleProductDetails}
                        />
                    ) : (
                        <div className={classes.spinner}>
                            <CircularProgress />
                        </div>
                    )}
                </TabPanel>
                <TabPanel value={value} index={4}>
                    {loading ? (
                        <Products
                            products={products}
                            onAddToCart={onAddToCart}
                            handleProductDetails={handleProductDetails}
                        />
                    ) : (
                        <div className={classes.spinner}>
                            <CircularProgress />
                        </div>
                    )}
                </TabPanel>
            </div>
        </>
    );
}
