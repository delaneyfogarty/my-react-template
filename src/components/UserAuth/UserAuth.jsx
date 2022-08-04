import Auth from './UserAuth.jsx';
import { useStatus } from '../state/hooks/userAuth.js';
import Profile from './Profile.jsx';

export default function UserAuth() {
  const { user, profile } = useStatus();

  return (
    <section>
      {user ? <Profile /> : <Auth />}

      <div>
        <h2>User</h2>
        <pre>{user.id}</pre>
        <h2>Profile</h2>
        <pre>{JSON.stringify(profile, true, 2)}</pre>
      </div>
    </section>
  );
}
