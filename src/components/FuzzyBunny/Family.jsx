import styles from './Family.css';

export default function Family({ family }) {
  return (
    <div className={styles.Family}>
      <h2>{family.name}</h2>
      <img>{family.avatar}</img>
    </div>
  );
}
