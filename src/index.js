import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'constans/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
