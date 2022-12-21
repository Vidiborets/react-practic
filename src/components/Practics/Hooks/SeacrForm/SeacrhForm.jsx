import { useEffect, useState } from 'react';
export const SeacrhForm = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setPage(1);
    setQuery(e.target.elements.query.value);
    setItems([]);
    e.target.reset();
  };
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  useEffect(() => {
    console.log(page);
    console.log(query);
    console.log('FetchData');
  }, [items, page, query]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="button">Search</button>
      </form>
      <button onClick={loadMore}>Load more</button>
    </div>
  );
};
