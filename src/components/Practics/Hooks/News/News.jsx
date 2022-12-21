import { useState } from 'react';
import { NewsSeacrhForm } from './NewsSearchForm/NewsSearchForm';
import axios from 'axios';
import { useEffect } from 'react';
axios.defaults.headers.common['Authorization'] =
  'Bearer f79be4787a5a413db4ebe55e5c31c59f';

const fetchArticlesQuery = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 5,
}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
    )
    .then(response => response.data.articles);
};
export const News = () => {
  const [articles, setArticless] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(articles);
  const handleChangeQuery = query => {
    setSearchQuery(query);
    setCurrentPage(1);
    setArticless([]);
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const fetchArticles = () => {
      const options = { searchQuery, currentPage };
      setIsLoading(true);
      fetchArticlesQuery(options)
        .then(articles => {
          setArticless(prevState => [...prevState, ...articles]);
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    };
    fetchArticles();
  }, [currentPage, searchQuery]);
  const updatePage = () => {
    setCurrentPage(prevCurrent => prevCurrent + 1);
  };
  const shoulRenderLoadMoreButton = articles.length > 0 && !isLoading;
  return (
    <>
      {error && <h1>Ой ошибка</h1>}
      <NewsSeacrhForm onSubmit={handleChangeQuery} />
      <ul>
        {articles.map(({ title, url }) => (
          <li key={title}>
            <a href={url}>{title}</a>
          </li>
        ))}
      </ul>
      {shoulRenderLoadMoreButton && (
        <button type="button" onClick={updatePage}>
          Загрузить еще
        </button>
      )}
      {isLoading && <p>Загружаем...</p>}
    </>
  );
};
