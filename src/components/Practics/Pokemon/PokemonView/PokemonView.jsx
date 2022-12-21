import React from 'react';
import {
  PokemonErrorView,
  PokemonDataView,
  PokemonPendingView,
} from '../index';

import pokemonApi from '../../../../services/pokemon-api';
export class PokemonView extends React.Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const nextName = this.props.pokemonName;
    if (prevProps.pokemonName !== nextName) {
      this.setState({ status: 'pending' });
      pokemonApi
        .fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { error, status, pokemon } = this.state;
    const { pokemonName } = this.props;
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
  }
}
