import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { Container, Grid, Typography } from '@mui/material';

const Home = () => {
  const featuredProduct = [
    { id: 1, name: 'Product 1', price: 100, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 200, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
      <Header />
      <Container>
        <Typography variant="h4" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={3}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;