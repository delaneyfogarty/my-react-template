import { Outlet } from 'react-router-dom';
import Navigation from '../Page/Header/Navigation';

const navigation = [
  { to: '', label: 'Families' },
  // bunnies
];

export default function FuzzyBunny() {
  return (
    <section>
      <header>
        <Navigation navigation={navigation} />
      </header>
      <Outlet />
    </section>
  );
}
