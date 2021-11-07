/* eslint-disable prettier/prettier */
import { AppBar, Badge, Button, IconButton, InputBase, Toolbar, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCart';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Account from '../Account/Account';
import Drawer from '../Drawer/Drawer';
import Slider from '../Slider/Slider';
import useStyles from './styles';


export default function PrimarySearchAppBar({ totalItems,fetchProductByCategory,term,searchKeyword}) {
    const classes = useStyles();
    
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [aOpen, setAOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const location = useLocation();
    

    const handleAccountOpen = (scrollType) => () => {
        setAOpen(true);
        setScroll(scrollType);
    };

      const handleAccountClose = () => {
        setAOpen(false);
    };  

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const handleChange=(e)=>{
        searchKeyword(e.target.value);
    }
    
    const mobileMenuId = 'primary-search-account-menu-mobile';

    return (
        <div>
        <div className={classes.grow}>
            <AppBar  position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography 
                        component={Link}
                        to="/"
                        variant="h3"
                        className={classes.title}
                        color="inherit">
                        {/* <img src={logo} alt="commerce.js" height="50px" className={classes.image} />{' '} */}
                        rTech.
                    </Typography>
                    <div className={classes.grow} />
                     <div className={classes.search}>                       
                          <InputBase
                            placeholder="Product Name.."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            value={term}
                            onChange={handleChange}
                        />                        
                        <IconButton type="submit"  className={classes.iconButton} aria-label="search"  component={Link} to="/searchedProduct">
                            <SearchIcon />
                        </IconButton>
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Button component={Link}
                        to="/" color="inherit">Home</Button>
                        {(location.pathname === '/' 
                            || location.pathname === '/detailedProduct' 
                            || location.pathname === '/category' 
                            || location.pathname === '/searchedProduct'  
                            || location.pathname === '/your-experience' 
                            || location.pathname === '/privacy-policy'
                            || location.pathname === '/order-tracking' 
                            || location.pathname === '/delivery-terms-and-conditions' 
                            || location.pathname === '/how-to-order'  
                            || location.pathname === '/warranty-and-refund-policy' 
                            || location.pathname === '/procedures-of-refund'
                            || location.pathname === '/exchange-policy' )  && (
                            <div className={classes.button}>
                                <IconButton
                                    component={Link}
                                    to="/cart"
                                    aria-label="Show cart items"
                                    color="inherit"
                                >
                                    <Badge badgeContent={totalItems} color="secondary">
                                        <ShoppingCartSharpIcon />
                                    </Badge>
                                </IconButton>
                            </div>
                         )}
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                             aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleAccountOpen('paper')}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                         {(location.pathname === '/' 
                            || location.pathname === '/detailedProduct' 
                            || location.pathname === '/category' 
                            || location.pathname === '/searchedProduct'  
                            || location.pathname === '/your-experience' 
                            || location.pathname === '/privacy-policy'
                            || location.pathname === '/order-tracking' 
                            || location.pathname === '/delivery-terms-and-conditions' 
                            || location.pathname === '/how-to-order'  
                            || location.pathname === '/warranty-and-refund-policy' 
                            || location.pathname === '/procedures-of-refund'
                            || location.pathname === '/exchange-policy' )  && (
                                <div>
                                    <IconButton
                                        component={Link}
                                        to="/cart"
                                        aria-label="Show cart items"
                                        aria-controls={mobileMenuId}
                                        color="inherit"
                                    >
                                        <Badge badgeContent={totalItems} color="secondary">
                                            <ShoppingCartSharpIcon />
                                        </Badge>
                                    </IconButton>
                                </div>
                                )}
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    
                                    aria-haspopup="true"
                                    onClick={handleAccountOpen('paper')} 
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </div>                       
                </Toolbar>             
            </AppBar>
            {location.pathname === '/' && (<Slider />)}

            <Account scroll={scroll} aOpen={aOpen} handleClose={handleAccountClose}/> 
            <Drawer drawerOpen={drawerOpen} handleDrawerClose={handleDrawerClose} fetchProductByCategory={fetchProductByCategory} />
        </div>
    </div>
 );
}
