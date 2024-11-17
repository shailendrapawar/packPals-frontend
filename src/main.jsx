import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import AuthLayout from './layouts/AuthLayout'
import Landing from './Landing'


const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AuthLayout />}>
      <Route path='' element={<Landing />}></Route>

      <Route path='auth'>
        <Route path='/register'></Route>
        <Route path='/login'></Route>
      </Route>

      <Route path='user'>
      <Route path='/profile'></Route>
      <Route path='/'></Route>
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myRouter}>

    </RouterProvider>
  </StrictMode>,
)
