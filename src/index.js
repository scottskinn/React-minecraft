import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

// import ReactDOM from 'react-dom';

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // document.getElementById('root'),
);
