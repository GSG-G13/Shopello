/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Cart from './components/Cart/Cart.jsx';
import SingIn from './components/account/SingIn.jsx';
import SingUp from './components/account/SingUp.jsx';
import Home from './pages/home/Home.jsx';
import Details from './components/details/Details.jsx';

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
  {
    path: '/cart',
    element: <Cart userId="1" />,
  },
  {
    path: '/detils',
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
