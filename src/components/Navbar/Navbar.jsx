import React from 'react'
import { AppBar, Tooblar, IconButton, Badge, MenuItem, Menu, Typography, Toolbar } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'

import logo from '../../assets/shoplogo.png'
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" classNam={classes.AppBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Commerce site
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button} />
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar