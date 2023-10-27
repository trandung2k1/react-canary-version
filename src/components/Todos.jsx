'use server';
//Note not support render async/await
import React from 'react';

const Todos = () => {
  function addToCart() {
    'use server';
    console.log('HIHI');
  }
  return <div onClick={addToCart}>Todos</div>;
};

export default Todos;
