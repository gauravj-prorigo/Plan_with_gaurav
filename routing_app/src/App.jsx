import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider  } from 'react-router-dom'
import User from './componentes/User'
import Home from './componentes/Home'
import UserProfile from './componentes/UserProfile'
const routes = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/user',
    element:<User/>
  },
  {
    path:'/user/:id',
    element:<UserProfile/>
  }
])
function App() {
  return (
   <RouterProvider router={routes}/>
  )
}

export default App
