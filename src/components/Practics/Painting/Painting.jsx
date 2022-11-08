import React from 'react';
import PropTypes from 'prop-types';

const Painting = props => {
  const { url, title, price, authorName, profile, quantity } = props;

  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profile}>{authorName}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};

export default Painting;

Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  profile: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
