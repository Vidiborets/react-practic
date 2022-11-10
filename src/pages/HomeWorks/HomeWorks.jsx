import { Link, Outlet } from 'react-router-dom';
import { List } from 'pages/Practics/Practics.styled';
import { Box } from 'components/Box/Box';

export function HomeWorks() {
  return (
    <Box
      as="section"
      background="linear-gradient(90deg, #cce6ff,#7abfff,#52abff);"
      p={50}
    >
      <List>
        <li>
          <Link to="task1">Домашка 1</Link>
        </li>
        <li>
          <Link to="task2">Домашка 2</Link>
        </li>
      </List>
      <Outlet />
    </Box>
  );
}
