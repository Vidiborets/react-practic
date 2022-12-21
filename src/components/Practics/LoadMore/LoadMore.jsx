import React from 'react';

export class LoadMore extends React.Component {
  state = {
    page: 1,
    query: '',
    items: [],
  };
  handleClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      page: 1,
      query: e.target.elements.query.value,
      items: [],
    });
    e.target.reset();
  };
  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      console.log('Делаем Fetch');
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" name="query" />
            <button type="submit">Search</button>
          </label>
        </form>
        <button type="submit" onClick={this.handleClick}>
          Load more
        </button>
      </div>
    );
  }
}
