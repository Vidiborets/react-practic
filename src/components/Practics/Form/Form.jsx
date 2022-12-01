import React from 'react';
import shortid from 'shortid';
import { Box } from 'components/Box/Box';
export class Form extends React.Component {
  state = {
    name: '',
    tag: '',
    experience: '',
    licence: false,
  };
  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      tag: '',
      experience: '',
    });
  };
  handleLicence = e => {
    console.log(e.target.checked);
    this.setState({ licence: e.target.checked });
  };
  // handleInputChange = e => {
  //   this.setState({
  //     name: e.target.value,
  //   });
  // };
  // handleTagChange = e => {
  //   this.setState({
  //     tag: e.target.value,
  //   });
  // };
  render() {
    const { name, tag } = this.state;
    return (
      <Box mt={30}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Имя
            <input
              type="text"
              onChange={this.handleChange}
              value={name}
              name="name"
              id={this.nameInputId}
            />
          </label>
          <label htmlFor={this.tagInputId}>
            Фамилия
            <input
              type="text"
              value={tag}
              onChange={this.handleChange}
              name="tag"
              id={this.tagInputId}
            />
          </label>
          <Box mt={30}>
            <p>Ваш уровень :</p>
            <label>
              <input
                type="radio"
                name="experience"
                value="junior"
                onChange={this.handleChange}
                checked={this.state.experience === 'junior'}
              />
              Junior
            </label>
            <label>
              <input
                type="radio"
                name="experience"
                value="middle"
                onChange={this.handleChange}
                checked={this.state.experience === 'middle'}
              />
              Middle
            </label>
            <label>
              <input
                type="radio"
                name="experience"
                value="senior"
                onChange={this.handleChange}
                checked={this.state.experience === 'senior'}
              />
              Senior
            </label>

            <button type="submit" disabled={!this.state.licence}>
              Отправить
            </button>
          </Box>
          <label htmlFor="">
            <input
              type="checkbox"
              name="licence"
              checked={this.state.licence}
              onChange={this.handleLicence}
            />
            Согласен с условием
          </label>
        </form>
      </Box>
    );
  }
}
