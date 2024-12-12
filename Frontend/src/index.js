import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { IsLoginnedProvider, IsUserProvider } from './context/isLogined';
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IsLoginnedProvider>
    <IsUserProvider>
      <App />
    </IsUserProvider>
  </IsLoginnedProvider>
);