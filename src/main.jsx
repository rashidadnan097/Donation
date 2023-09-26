/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import createRoute from './Router/Route';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={createRoute} />
  </React.StrictMode>,
)
