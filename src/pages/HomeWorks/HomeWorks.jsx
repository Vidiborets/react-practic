import { Link, Outlet } from 'react-router-dom';
import { List } from 'pages/Practics/Practics.styled';

export function HomeWorks(params) {
  return (
    <main>
      <List>
        <li>
          <Link to="task1">Домашка 1</Link>
        </li>
        <li>
          <Link to="task2">Домашка 2</Link>
        </li>
      </List>
      <Outlet />
    </main>
  );
}
