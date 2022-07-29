import { useEffect } from 'react';
import { useSearch } from '../../state/hooks/url.js';
import Card from '../Pokedex/Card';

export default function PokemonList({ pokedex }) {
  return (
    <ul>
      {pokedex.map((pokemon, i) => (
        <Card key={pokemon._id + i} pokemon={pokemon} />
      ))}
    </ul>
  );
}
