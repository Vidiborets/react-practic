import { useState } from 'react';

export const NewsSeacrhForm = ({ onSubmit }) => {
  const [news, setNews] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(news);
    setNews('');
  };
  const handleChange = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'news':
        setNews(value);
        break;

      default:
        return;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="news" onChange={handleChange} value={news} />
      </label>
      <button type="submit">Искать</button>
    </form>
  );
};
