import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import App from './app'
import { GlobalContextProvider } from './components/context/GlobalContext'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <GlobalContextProvider>
        <App/>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)

