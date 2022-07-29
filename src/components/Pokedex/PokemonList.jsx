import Card from './Card.jsx';
import styles from './PokemonList.css';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function PokemonList({ pokedex, onLoadNext }) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    onLoadNext();
  }, [inView]);

  return (
    <div className={styles.PokemonList}>
      <ul>
        {pokedex.map((pokemon, i) => (
          <Card
            key={pokemon._id + i}
            pokemon={pokemon}
            loadRef={i === pokedex.length - 3 ? ref : null}
          />
        ))}
      </ul>
    </div>
  );
}
