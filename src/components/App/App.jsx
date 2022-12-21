import React from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { Practics, HomeWorks, Home } from 'pages/';
import {
  PaintingList,
  PageEvent,
  Button,
  State,
  Pokemon,
  Material,
  Hooks,
} from 'components/Practics';
import { Task1, Task2, Task3, Task4, Task5 } from 'components/HomeWorks';
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
            <li>
              <AppBar />
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
            <Route path="lesson4" element={<State />} />
            <Route path="lesson5" element={<Pokemon />} />
            <Route path="lesson6" element={<Material />} />
            <Route path="lesson7" element={<Hooks />} />
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
            <Route path="task3" element={<Task3 />} />
            <Route path="task4" element={<Task4 />} />
            <Route path="task5" element={<Task5 />} />
          </Route>
        </Routes>
      </Router>
    </Box>
  );
};
