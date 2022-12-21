import { Box } from 'components/Box/Box';
import { Button, Input } from './Phonebook.styled';
import React from 'react';
import shortid from 'shortid';
export class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));

    this.props.onSubmit(contact);
    this.reset();
  };
  reset = () => {
    this.setState({
      contact: [],
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <>
        <h2>{this.props.title}</h2>
        <h3>Name</h3>
        <form onSubmit={this.handleSubmit}>
          <Box display="flex" flexDirection="column">
            <label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="name"
                value={name}
                placeholder={'Введите имя'}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label>
              <Input
                type="tel"
                onChange={this.handleChange}
                name="number"
                placeholder={'Введите номер'}
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <Button type="submit">Add contact</Button>
          </Box>
        </form>
      </>
    );
  }
}
