import Card from './Card.jsx';

export default function PokemonList({ pokedex }) {
  return (
    <ul>
      {pokedex.map((pokemon, i) => (
        <Card key={pokemon._id + i} pokemon={pokemon} />
      ))}
    </ul>
  );
}
