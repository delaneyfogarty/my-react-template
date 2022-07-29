import styles from './Card.css';

export default function Card({ pokemon, loadRef }) {
  const { url_image, pokemon: name, type_1, type_2 } = pokemon;

  return (
    <li className={styles.Card} ref={loadRef}>
      <img src={url_image} alt={name} />

      <h2 className={styles.Header} title={name}>
        {name}
      </h2>

      <div className={styles.Types}>
        <Type type={type_1} />
        <Type type={type_2} />
      </div>
    </li>
  );
}

function Type({ type }) {
  return type === 'NA' ? null : <span>{type}</span>;
}
