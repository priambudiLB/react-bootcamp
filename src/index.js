import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './index.css';
// import App from './App';
import Form from './Form';
import Home from './Home';
import NavBar from './NavBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <NavBar />
      <Outlet />
    </>,
    errorElement: <p>Page Not Found</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Form />,
      }
    ],
  },
  {
    path: "/login2",
    element: <Form />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

