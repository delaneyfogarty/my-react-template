import { Outlet } from 'react-router-dom';
import Navigation from '../Page/Header/Navigation';
import styles from './FuzzyBunny.css';

const navigation = [
  { to: '', label: 'Families' },
  { to: 'bunnies', label: 'Bunnies' },
];

export default function FuzzyBunny() {
  return (
    <section className={styles.FuzzyBunny}>
      <header>
        <Navigation navigation={navigation} />
      </header>
      <Outlet />
    </section>
  );
}
