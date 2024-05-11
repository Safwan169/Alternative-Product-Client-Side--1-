import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Route from './componants/Route';
import Authentication from './componants/Authentication';
import Home from './componants/Home';
import Queries from './componants/Queries';
import Login from './componants/Login';
import Register from './componants/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
      ,{
        path:'/queries',
        element:<Queries></Queries>
      }
      ,{
        path:'/login',
        element:<Login></Login>
      }
      ,{
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authentication>
    <RouterProvider router={router} />

    </Authentication>
  </React.StrictMode>,
)
