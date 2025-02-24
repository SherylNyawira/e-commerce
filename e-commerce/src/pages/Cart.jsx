import React from 'react';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import CheckoutButton from '../components/CheckoutButton';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 100, quantity: 2 },
    { id: 2, name: 'Product 2', price: 200, quantity: 1 },
  ];

  return (
    <div>
      <Header />
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <CheckoutButton />
      </div>
    </div>
  );
};

export default Cart;