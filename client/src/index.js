/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */

/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Cart from './components/Cart/Cart.jsx';
import SingIn from './components/Account/SingIn.jsx';
import SingUp from './components/Account/SingUp.jsx';
import Home from './pages/home/Home.jsx';
import Details from './components/details/Details.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <SingIn />,
  },
  {
    path: '/signup',
    element: <SingUp />,
  },
  {
    path: '/cart',
    element: <Cart userId />,
  },
  {
    path: '/detils',
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
