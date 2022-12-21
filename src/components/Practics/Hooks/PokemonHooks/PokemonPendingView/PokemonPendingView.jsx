import { MoonLoader } from 'react-spinners';
import { PokemonDataView } from '../PokemonDataView/PokemonDataView';
import pendingImage from '../../../../../data/images/1581672938_2.jpeg';
export const PokemonPendingView = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };
  return (
    <div>
      <MoonLoader color="hsla(168, 67%, 53%, 1)" loading />
      <div>Загружаем....</div>
      {<PokemonDataView pokemon={pokemon} />}
    </div>
  );
};
