import { Link, Outlet } from 'react-router-dom';
import { List } from 'pages/Practics/Practics.styled';

export function HomeWorks() {
  return (
    <>
      <List>
        <li>
          <Link to="task1">Домашка 1</Link>
        </li>
        <li>
          <Link to="task2">Домашка 2</Link>
        </li>
        <li>
          <Link to="task3">Домашка 3</Link>
        </li>
        <li>
          <Link to="task4">Домашка 4</Link>
        </li>
        <li>
          <Link to="task5">Домашка 5</Link>
        </li>
      </List>
      <Outlet />
    </>
  );
}
