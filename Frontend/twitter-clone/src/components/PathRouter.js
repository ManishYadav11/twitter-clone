import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Feed from './Feed';
import Signup from './Signup';



function PathRouter() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Feed />,
        },
        {
          path: "/home",
          element: <Feed />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
        path:"/signup",
        element:<Signup/>
    },
  ]);

  return (
    <RouterProvider router={appRouter} />
  );
}

export default PathRouter;
