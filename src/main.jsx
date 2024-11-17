import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import AuthLayout from './layouts/AuthLayout'
import Landing from './Landing'
import RootLayout from './layouts/RootLayout'
import UserLayouts from './layouts/UserLayouts'
import Register from './pages/authPages/Register'
import Login from './pages/authPages/Login'
import Home from './pages/userPages/homePage/Home'
import MyRequest from './pages/userPages/myRequestPage/MyRequest'
import PlanTrip from './pages/userPages/planTripPage/PlanTrip'
import Explore from './pages/userPages/explorePage/Explore'
import UserProfile from './pages/userPages/userProfilePage/UserProfile'
import Post from './pages/userPages/postPage/Post'


const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>

      {/* landing page  ===============*/}
      <Route path='' element={<Landing />}></Route>

      {/* auth pages for login and register============ */}
      <Route path='auth' element={<AuthLayout/>}>
        <Route path='/auth/register' element={<Register/>}></Route>
        <Route path='/auth/login' element={<Login/>}></Route>
      </Route>

      {/* pages for users=============================== */}
      <Route path='user' element={<UserLayouts/>}>
        <Route path='/user/home' element={<Home/>}></Route>
        <Route path='/user/planTrip' element={<PlanTrip/>}></Route>
        <Route path='/user/explore' element={<Explore/>}></Route>
        <Route path='/user/myRequests' element={<MyRequest/>}></Route>
        <Route path='/user/post' element={<Post/>}></Route>
        <Route path='/user/profile' element={<UserProfile/>}></Route>
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
