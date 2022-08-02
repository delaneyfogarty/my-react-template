import styles from './Family.css';

export default function Family({ family }) {
  return <div className={styles.Family}>{family.name}</div>;
}
