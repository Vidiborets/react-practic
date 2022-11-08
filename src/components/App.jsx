import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Practics from 'pages/Practics';
import HomeWorks from 'pages/HomeWorks';
import Home from 'pages/Home';
import PaintingList from './Practics/Painting/PaintingList';
import PageEvent from './Practics/PageEvent/PageEvent';
import Emotion from './Practics/Emotions/Emotion';
import paintings from 'data/painting.json';
import Task1 from './HomeWorks/Task1/Task1';
import Task2 from './HomeWorks/Task2/Task2';

export const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/practics">Практика</Link>
          </li>
          <li>
            <Link to="/homeworks">Домашки</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/practics" element={<Practics />}>
            <Route
              path="lesson1"
              element={<PaintingList paintings={paintings} />}
            />
            <Route path="lesson2" element={<PageEvent />} />
            <Route path="lesson3" element={<Emotion />} />
          </Route>
          <Route path="/homeworks" element={<HomeWorks />}>
            <Route path="task1" element={<Task1 />} />
            <Route path="task2" element={<Task2 />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};
