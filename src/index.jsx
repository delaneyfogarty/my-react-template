import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import FuzzyBunnyProvider from './components/state/context/FuzzyBunnyContext';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <FuzzyBunnyProvider>
      <App />
    </FuzzyBunnyProvider>
  </React.StrictMode>
);
