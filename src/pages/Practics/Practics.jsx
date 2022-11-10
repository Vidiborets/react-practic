import { Link, Outlet } from 'react-router-dom';
import { List } from './Practics.styled';
import { Box } from 'components/Box/Box';
export function Practics() {
  return (
    <Box as="section">
      <List>
        <li>
          <Link to="lesson1">Урок 1 Компоненты и коллекции</Link>
        </li>
        <li>
          <Link to="lesson2">
            Урок 2 Компоненты и коллекции. Стилизация - теория. Emotions
          </Link>
        </li>
        <li>
          <Link to="lesson3">Урок 3 Компоненты и Стилизация.Кнопки</Link>
        </li>
        <li>
          <Link to="lesson4">Урок 4 События и состояние</Link>
        </li>
      </List>
      <Outlet />
    </Box>
  );
}
