'use client';
import React from 'react';
import { addToCart } from '../actions/addToCart';
import { Button } from './Button';
import { useFormState } from 'react-dom';
const Todos = () => {
  const [state, formAction] = useFormState(addToCart, '');
  console.log(state);
  return (
    <form action={formAction}>
      <input type="text" name="name" />
      <Button />
    </form>
  );
};

export default Todos;
