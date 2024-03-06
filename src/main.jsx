import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './sass/index.scss'


import HomePage from './pages/HomePage'
import HeadphonesPage from './pages/HeadphonesPage'
import SpeakersPage from './pages/SpeakersPage'
import EarphonesPage from './pages/EarphonesPage'
import ProductDetailsPage from './pages/ProductDetailsPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/headphones',
    element: <HeadphonesPage/>
  },
  {
    path: '/speakers',
    element: <SpeakersPage/>
  },
  {
    path: '/earphones',
    element:  <EarphonesPage/>
  },
  {
    path: '/product-details',
    element: <ProductDetailsPage/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
