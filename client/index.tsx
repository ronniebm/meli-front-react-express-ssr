import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './src/App';

import "./styles.scss";

window.addEventListener('DOMContentLoaded', () => {
  hydrateRoot(
    document.getElementById('app'),
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
