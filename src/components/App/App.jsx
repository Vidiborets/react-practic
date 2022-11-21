import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { Practics, HomeWorks, Home } from 'pages/';
import { PaintingList, PageEvent, Button, Counter } from 'components/Practics';
import { Task1, Task2 } from 'components/HomeWorks';
import { List } from './App.styled';
import paintings from 'data/paintings';
import user from 'data/user';
import friends from 'data/friends';
import data from 'data/data';
import transactions from 'data/transactions';
import { Box } from 'components/Box/Box';

export const App = () => {
  return (
    <Box as="main">
      <Router>
        <Box bg="tomato" pt={4} width={1} as="section">
          <List>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/practics">Практика</NavLink>
            </li>
            <li>
              <NavLink to="/homeworks">Домашки</NavLink>
            </li>
          </List>
        </Box>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/practics" element={<Practics />}>
            <Route
              path="lesson1"
              element={<PaintingList paintings={paintings} />}
            />
            <Route path="lesson2" element={<PageEvent />} />
            <Route path="lesson3" element={<Button />} />
            <Route path="lesson4" element={<Counter initialstate={10} />} />
          </Route>
          <Route path="/homeworks" element={<HomeWorks />}>
            <Route
              path="task1"
              element={
                <Task1
                  user={user}
                  data={data}
                  friends={friends}
                  transactions={transactions}
                />
              }
            />
            <Route path="task2" element={<Task2 />} />
          </Route>
        </Routes>
      </Router>
    </Box>
  );
};
