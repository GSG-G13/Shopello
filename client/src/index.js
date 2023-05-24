/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import SingIn from './components/Account/SingIn.jsx';
import SingUp from './components/Account/SingUp.jsx';
import Home from './pages/home/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
