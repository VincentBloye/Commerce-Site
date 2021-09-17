import { CallMissedSharp } from '@material-ui/icons'
import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles'
import CartItem from './CartItem/CartItem'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles;

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart,
            <Link to="/" className={classes.link}> add some here </Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((lineItem) => (
                    <Grid item xs={12} sm={4} key={lineItem.id}>
                        <CartItem item={lineItem} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
                    <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );

    if (!cart.line_items) return 'loading...';

    return (
        <Container>
            <div className="toolbar" />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.lengths ? <EmptyCart /> : <FilledCart />}
        </Container>
    );
};

export default Cart
