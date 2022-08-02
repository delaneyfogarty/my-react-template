import { useFamilies } from '../state/hooks/fuzzyBunny';
import Family from './Family';
import styles from './FamilyList.css';

export default function FamilyList() {
  const { families } = useFamilies();

  if (!families) return null;

  return (
    <ul className={styles.FamilyList}>
      {families.map((family) => (
        <Family key={family.id} family={family} />
      ))}
    </ul>
  );
}
