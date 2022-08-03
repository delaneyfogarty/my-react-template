import FamilyList from './FamilyList';
import styles from './Families.css';
import AddFamily from './AddFamily';

export default function Families() {
  return (
    <section className={styles.Families}>
      <AddFamily />
      <FamilyList />
    </section>
  );
}
