import { ImSearch } from 'react-icons/im';
import { useState } from 'react';
import { toast } from 'react-toastify';
export const PokemonForm = ({ onSubmit }) => {
  const [pokemonName, setPokemonName] = useState('');
  const [disabled, setDisabled] = useState(true);
  const handleSubmit = e => {
    e.preventDefault();
    if (pokemonName === '') {
      toast.error('Ввкдите имя покемона');
      return;
    }
    onSubmit(pokemonName);
    reset();
    setDisabled(true);
  };
  const handleChange = e => {
    setPokemonName(e.currentTarget.value);
    setDisabled(false);
  };
  const reset = () => {
    setPokemonName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="pokemonName">
        <input
          type="text"
          name="PokemonName"
          value={pokemonName}
          onChange={handleChange}
        />
        <button type="submit" disabled={disabled}>
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </label>
    </form>
  );
};
