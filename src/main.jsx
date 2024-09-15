import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider } from 'react-router-dom'
import myCreateRoute from './Ui/Router/Route'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={myCreateRoute}></RouterProvider>
  </StrictMode>,
)
