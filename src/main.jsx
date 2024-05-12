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
import Add from './componants/Add';
import Recforme from './componants/Recforme';
import Myqueries from './componants/Myqueries';
import Myrec from './componants/Myrec';
import PrivateRoute from './componants/PrivateRoute';
import Error from './componants/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        loader:()=>fetch('http://localhost:5000/queries'),
        element:<Home></Home>
      }
      ,{
        path:'/queries',
        loader:()=>fetch('http://localhost:5000/queries'),
        element:<Queries></Queries>
      }
      ,{
        path:'/login',
        element:<Login></Login>
      }
      ,{
        path:'/register',
        element:<Register></Register>
      },{
        path:'/add',
        element:<PrivateRoute><Add></Add></PrivateRoute>
      }
      ,{
        path:'/rec-for-me',
        element:<PrivateRoute><Recforme></Recforme></PrivateRoute>
      }
      ,{
        path:'/myqueries',
        element:<PrivateRoute><Myqueries></Myqueries></PrivateRoute>
      }
      ,{
        path:'/my-rec',
        element:<PrivateRoute><Myrec></Myrec></PrivateRoute>
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
