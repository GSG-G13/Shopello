import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import SingIn from './components/Account/SingIn';
import SingUp from './components/Account/SingUp';
import Home from './pages/home/Home';

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
