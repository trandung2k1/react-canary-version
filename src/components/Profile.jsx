import { total } from './Page';

function Profile({ array }) {
  const rs = total(array);
  return (
    <section>
      <h2>{rs}</h2>
    </section>
  );
}

export default Profile;
