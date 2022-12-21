import { useEffect } from 'react';
import { useState } from 'react';

export const LoadMoreHooks = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    setQuery(query);
    setPage(page);
    setItems([]);
    console.log(items);
    reset();
  };
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'query':
        setQuery(value);

        break;

      default:
        return;
    }
  };
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  const reset = () => {
    setQuery('');
    setPage(1);
    setItems([]);
  };
  useEffect(() => {
    if (!query) {
      return;
    }
    console.log(page);
    console.log(query);

    console.log('Делаем fetch');
  }, [query, page]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search
          <input
            type="text"
            onChange={handleChange}
            name="query"
            value={query}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <button type="button" onClick={loadMore}>
        LoadMore
      </button>
    </div>
  );
};
