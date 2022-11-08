import { Link, Outlet } from 'react-router-dom';
import { List } from './Practics.styled';
export function Practics() {
  return (
    <main>
      <List>
        <li>
          <Link to="lesson1">Урок 1 Компоненты и коллекции</Link>
        </li>
        <li>
          <Link to="lesson2">
            Урок 2 Компоненты и коллекции. Стилизация - теория. Emotions
          </Link>
        </li>
      </List>
      <Outlet />
    </main>
  );
}
