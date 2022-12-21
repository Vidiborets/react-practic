import { Box } from 'components/Box/Box';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { LoadMore } from '../LoadMore/LoadMore';
import { PokemonForm } from './PokemonForm/PokemonForm';
import { PokemonView } from './PokemonView/PokemonView';
export class Pokemon extends React.Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };
  render() {
    return (
      <Box>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonView pokemonName={this.state.pokemonName} />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <LoadMore />
      </Box>
    );
  }
}

// const URL = 'https://pokeapi.co/api/v2/pokemon/ditto';

// export class Pokemon extends React.Component {
//   state = {
//     pokemon: null,
//     loading: false,
//   };
//   componentDidMount() {
//     this.setState({ loading: true });
//     setTimeout(() => {
//       fetch(URL)
//         .then(res => res.json())
//         .then(pokemon => this.setState({ pokemon }))
//         .finally(() => this.setState({ loading: false }));
//     }, 1000);
//   }
//   render() {
//     const { pokemon, loading } = this.state;
//     return (
//       <div>
//         {loading && <h1>Загружаем</h1>}
//         {pokemon && <div>{pokemon.name}</div>}
//       </div>
//     );
//   }
// }
