import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import SingIn from './components/Account/SingIn';
import SingUp from './components/Account/SingUp';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/sining',
    element: <SingIn />,
  },
  {
    path: '/singup',
    element: <SingUp />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
