import Card from './Card.jsx';
import styles from './PokemonList.css';

export default function PokemonList({ pokedex }) {
  return (
    <ul className={styles.PokemontList}>
      {pokedex.map((pokemon, i) => (
        <Card key={pokemon._id + i} pokemon={pokemon} />
      ))}
    </ul>
  );
}
