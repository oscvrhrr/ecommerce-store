import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './sass/index.scss'


import HomePage from './pages/HomePage'
import HeadphonesPage from './pages/HeadphonesPage'
import SpeakersPage from './pages/SpeakersPage'
import EarphonesPage from './pages/EarphonesPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import MarkOnePage from './pages/MarkIPage'
import WhiteHeadphones from './pages/WhiteHeadphonesPage'


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
    path: '/product-details-mark-two',
    element: <ProductDetailsPage/>
  },
  {
    path: '/product-details-mark-one',
    element: <MarkOnePage/>
  },
  {
    path: '/product-details-xx59',
    element: <WhiteHeadphones/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
