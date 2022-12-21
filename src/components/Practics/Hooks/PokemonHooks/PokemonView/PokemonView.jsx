import { PokemonErrorView } from '../PokemonErrorView/PokemonErrorView';
import { PokemonPendingView } from '../PokemonPendingView/PokemonPendingView';
import { PokemonDataView } from '../PokemonDataView/PokemonDataView';
import { useState } from 'react';
import pokemonApi from '../../../../../services/pokemon-api';
import { useEffect } from 'react';
export const PokemonView = ({ pokemonName }) => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    if (!pokemonName) {
      console.log('empty');
      return;
    }

    setStatus('pending');
    pokemonApi
      .fetchPokemon(pokemonName)
      .then(pokemon => {
        setStatus('resolved');
        setPokemon(pokemon);
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [pokemonName]);
  if (status === 'idle') {
    return <div>Введите имя покемона</div>;
  }
  if (status === 'pending') {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }
  if (status === 'rejected') {
    return <PokemonErrorView message={error.message} />;
  }
  if (status === 'resolved') {
    return <PokemonDataView pokemon={pokemon} />;
  }
};
