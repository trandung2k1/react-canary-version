import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeProvider from './context/ThemeContext';
const root = ReactDOM.createRoot(document.getElementById('root'), { identifierPrefix: 'dungtv' });
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
