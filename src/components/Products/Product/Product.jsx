import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({ product }) => {
    const classes = useStyles();
    return (
        <Card className= {classes.root}>
            <CardMedia className= {classes.media} image='' title={product.name}></CardMedia>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant="h5" GutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                    <Typography variant="h2" color="textSecondary">
                        {product.description}
                    </Typography>
                    <CardActions disableSpacing className={classes.CardActions}>
                        <IconButton aria-label="Add to Cart">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                </div>
            </CardContent>
        </Card>
    )
}

export default Product;
