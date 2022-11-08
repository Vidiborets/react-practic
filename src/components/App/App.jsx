import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { Practics, HomeWorks, Home } from 'pages/';
import { PaintingList, PageEvent, Section } from 'components/Practics';
import { Task1, Task2 } from 'components/HomeWorks';
import { List } from './App.styled';
import paintings from 'data/painting.json';

export const App = () => {
  return (
    <Router>
      <Section>
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
      </Section>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/practics" element={<Practics />}>
          <Route
            path="lesson1"
            element={<PaintingList paintings={paintings} />}
          />
          <Route path="lesson2" element={<PageEvent />} />
        </Route>
        <Route path="/homeworks" element={<HomeWorks />}>
          <Route path="task1" element={<Task1 />} />
          <Route path="task2" element={<Task2 />} />
        </Route>
      </Routes>
    </Router>
  );
};
