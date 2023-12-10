'use client';
import { useFormStatus } from 'react-dom';
export function Button() {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <button type="submit" disabled={pending}>
      Add to cart
    </button>
  );
}
