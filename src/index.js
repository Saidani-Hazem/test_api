import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Users from './pages/users';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Notfound from './components/notfound';
import Posts from './pages/posts';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  errorElement:<Notfound found={"Page"}/>
  },
  {
    path: "/users",
    element: <Users/>,
    errorElement:<Notfound found={"Page"}/>
  },
  {
    path: "/posts",
    element: <Posts/>,
    errorElement:<Notfound found={"Page"}/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();