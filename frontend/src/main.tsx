import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const node = document.getElementById('root');
if (!node) throw new Error('root is not found');
const root = createRoot(node);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
