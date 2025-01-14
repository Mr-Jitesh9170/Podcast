import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider, MediaProvider, OpenProvider } from './context/context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <OpenProvider>
    <MediaProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </MediaProvider>
  </OpenProvider>
);