/* eslint-disable prettier/prettier */
import { List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@material-ui/core';
import DockIcon from '@material-ui/icons/Dock';
import HeadsetIcon from '@material-ui/icons/Headset';
import HomeIcon from '@material-ui/icons/Home';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import WatchIcon from '@material-ui/icons/Watch';
import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Drawer({drawerOpen,handleDrawerClose,fetchProductByCategory,}) {
     useEffect(() => {
        setTimeout(() => {
            fetchProductByCategory('mobiles');
        }, 2000);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            <SwipeableDrawer anchor="left" open={drawerOpen}
                onClose={handleDrawerClose}>
                    <List>
                        <ListItem button component={Link} to="/" >
                            <ListItemIcon><HomeIcon/></ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button  onClick={() => fetchProductByCategory('mobiles')}  component={Link} to="/category">
                            <ListItemIcon><SmartphoneIcon/></ListItemIcon>
                            <ListItemText primary="Phones & Tablets" />
                        </ListItem>

                        <ListItem button  onClick={() => fetchProductByCategory('macbook-laptop')}  component={Link} to="/category">
                        <ListItemIcon><LaptopMacIcon/></ListItemIcon>
                            <ListItemText primary="Macbook & Laptop"  />
                        </ListItem>
                        <ListItem button onClick={() => fetchProductByCategory('audio')}  component={Link} to="/category">
                        <ListItemIcon><HeadsetIcon/></ListItemIcon>
                            <ListItemText primary="Audio" />
                        </ListItem>
                        <ListItem button onClick={() => fetchProductByCategory('fitness-wearable')}  component={Link} to="/category">
                        <ListItemIcon><WatchIcon/></ListItemIcon>
                            <ListItemText primary="Fitness & Wearable" />
                        </ListItem>
                        <ListItem button onClick={() => fetchProductByCategory('power-accessories')}  component={Link} to="/category">
                        <ListItemIcon><DockIcon/></ListItemIcon>
                            <ListItemText primary="Power & Accessories" />
                        </ListItem>
                        <ListItem button onClick={() => fetchProductByCategory('peripherals')}  component={Link} to="/category">
                        <ListItemIcon><SportsEsportsIcon/></ListItemIcon>
                            <ListItemText primary="Peripherals" />
                        </ListItem>
                    </List>
                </SwipeableDrawer>
        </div>
    )
}

export default Drawer;
