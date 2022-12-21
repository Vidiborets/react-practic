import { Link } from 'react-router-dom';

export const VideoList = ({ videos, onSelect }) => {
  return (
    <ul>
      {videos.map(({ id, link }) => (
        <li key={id}>
          <Link onClick={() => onSelect(link)}>{link}</Link>
        </li>
      ))}
    </ul>
  );
};
