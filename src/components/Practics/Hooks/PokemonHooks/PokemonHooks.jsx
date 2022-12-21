import { PokemonForm } from './PokemonForm/PokemonForm';
import { Box } from 'components/Box/Box';
import { PokemonView } from '../PokemonHooks/PokemonView/PokemonView';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
export const PokemonHooks = () => {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <Box>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonView pokemonName={pokemonName} />
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
    </Box>
  );
};
