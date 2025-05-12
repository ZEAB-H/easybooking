import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import AppProviders from './providers.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    //we add the Strict mode to have a better api call and management
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
);
