import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'shoes', description: 'running shoes', price: '$5' },
    { id: 2, name: 'Macbook', description: 'running laptop', price: '$15' },
];

const Products = () => {
    const classes = useStyles();
    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                // return something, everytime you loop in jsx there has to be id/key
                <Grid item Key={product.id} xs={12} sm={6} md={4} lg={3}>
                    {/* Product component */}
                    {/* product is a subcomponent of Product */}
                    {/* pass props = product */}
                    <Product product = {product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products;