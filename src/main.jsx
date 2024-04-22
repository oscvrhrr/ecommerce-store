import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import App from './app'
import { ProductContextProvider } from './components/context/CartContext'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <ProductContextProvider>
      <App/>
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)

