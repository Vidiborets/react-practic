import { Link, Outlet } from 'react-router-dom';

export default function HomeWorks(params) {
  return (
    <main>
      <ul>
        <li>
          <Link to="task1">Домашка 1</Link>
        </li>
        <li>
          <Link to="task2">Домашка 2</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
}
