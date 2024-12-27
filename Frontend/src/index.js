import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { IsLoginnedProvider, IsUserProvider, MediaProvider } from './context/context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MediaProvider>
    <IsLoginnedProvider>
      <IsUserProvider>
        <App />
      </IsUserProvider>
    </IsLoginnedProvider>
  </MediaProvider>
);