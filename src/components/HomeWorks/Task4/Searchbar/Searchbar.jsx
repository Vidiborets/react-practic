import React from 'react';
import { SearchBar, Form, Button, Label, Input } from './Seacrhbar.styled';
import { BiSearchAlt } from 'react-icons/bi';

export class Searchbar extends React.Component {
  state = {
    value: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.reset();
  };
  reset = () => {
    this.setState({
      value: '',
    });
  };
  render() {
    const { value } = this.state;
    return (
      <SearchBar>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <BiSearchAlt style={{ width: '20px', height: '20px' }} />
            <Label>Search</Label>
          </Button>

          <Input
            onChange={this.handleChange}
            name="value"
            type="text"
            value={value}
            autocomplete="off"
            placeholder="Search images and photos"
          />
        </Form>
      </SearchBar>
    );
  }
}
