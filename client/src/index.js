import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Header from './components/header/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    // errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "",
    //     element: < />,
    //   },
    // ],
  },
  {
    path: '/Cart',
    element: <Cart />,
    // errorElement: <ErrorPage />,
  },
  {
    path: '/Signup',
    element: 'signup page',
    // errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: 'login page',
    // errorElement: <ErrorPage />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
