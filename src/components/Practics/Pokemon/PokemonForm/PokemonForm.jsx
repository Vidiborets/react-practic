import React from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class PokemonForm extends React.Component {
  state = {
    pokemonName: '',
    disabled: true,
  };
  notify = text =>
    toast(`${text}`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  handleChange = e => {
    if (e.currentTarget.value !== '') {
      this.setState({ disabled: false });
    }
    this.setState({
      pokemonName: e.currentTarget.value.toLowerCase(),
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.pokemonName.trim() === '') {
      toast.error('Введите имя покемона');
      return;
    }
    this.props.onSubmit(this.state.pokemonName);
    this.reset();
    this.setState({ disabled: true });
    this.notify('Покемон отправлен');
  };
  reset = () => {
    this.setState({ pokemonName: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="pokemonName">
          <input
            type="text"
            name="PokemonName"
            value={this.state.pokemonName}
            onChange={this.handleChange}
          />
          <button type="submit" disabled={this.state.disabled}>
            <ImSearch style={{ marginRight: 8 }} />
            Найти
          </button>
        </label>
      </form>
    );
  }
}
