import { Link, Outlet } from 'react-router-dom';

export default function Practics() {
  return (
    <main>
      <ul>
        <li>
          <Link to="lesson1">Урок 1 Компоненты и коллекции</Link>
        </li>
        <li>
          <Link to="lesson2">
            Урок 2 Компоненты и коллекции. Стилизация - теория
          </Link>
        </li>
        <li>
          <Link to="lesson3">Урок 3 Библотека Emotion</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
}
