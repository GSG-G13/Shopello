import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
// import SingIn from './components/account/SingIn.jsx';
// import SingUp from './components/account/SingUp.jsx';
// eslint-disable-next-line import/extensions
import Home from './pages/home/Home.jsx';
// import Details from './components/details/Details.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  // {
  //   path: '/sining',
  //   element: <SingIn />,
  // },
  // {
  //   path: '/singup',
  //   element: <SingUp />,
  // },
  // {
  //   path: '/detils',
  //   element: <Details />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
