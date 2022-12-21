import PropTypes from 'prop-types';
import { Painting } from './Painting';

export const PaintingList = ({ paintings }) => {
  return (
    <ul>
      {paintings.map(painting => (
        <li key={painting.id}>
          <Painting
            url={painting.url}
            title={painting.title}
            authorName={painting.author.tag}
            price={painting.price}
            quantity={painting.quantity}
            profile={painting.author.url}
          />
        </li>
      ))}
    </ul>
  );
};

PaintingList.propTypes = {
  paintings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
