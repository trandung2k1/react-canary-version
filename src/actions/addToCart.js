'use server';
export async function addToCart(prevState, formValues) {
  console.log('Server action');
  console.log(prevState);
  console.log(formValues.get('name'));
  return 'Success';
}
