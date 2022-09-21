import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, } from "react-router-dom";
import './index.css';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <p>Index</p>
      <Outlet />
    </>,
    errorElement: <p>Page Not Found</p>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <p>Login</p>,
      }
    ],
  },
  {
    path: "/login2",
    element: <p>Login2</p>,
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);