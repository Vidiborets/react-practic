import React from 'react';
export class TodoEditor extends React.Component {
  state = {
    message: '',
  };
  handleChange = e => {
    this.setState({
      message: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.message);
    this.reset();
  };
  reset = () => {
    this.setState({
      message: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit">Добавить</button>
      </form>
    );
  }
}
