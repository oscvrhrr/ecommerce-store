import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './components/hero'
import ProductSection from './components/produce-section'
import './sass/index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero/>
    <ProductSection/>

  </React.StrictMode>
)
