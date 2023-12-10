import { cache } from 'react';
import Profile from './Profile';
export const total = cache((array) => {
  console.log('Total');
  return array.reduce((acc, item) => acc + item);
});

// export const total = cache((array) => {
//   console.log('Total');
//   return array.reduce((acc, item) => acc + item);
// });

function Page({ array }) {
  total(array);
  return (
    <>
      <Profile array={array} />
    </>
  );
}

export default Page;
