import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Services from './Components/Services'
import Home from './Components/Home/Home'
import About from './Components/About'
import Indutries from './Components/Industries'
import Team from './Components/Team'


const App = () => {
  /** Root Routes */
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/industries',
      element: <Indutries />
    },
    {
      path: '/team',
      element: <Team />
    },
    {
      path: '/services',
      element: <Services />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App