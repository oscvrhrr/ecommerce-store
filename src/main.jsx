import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/index.scss'
import Hero from './components/hero'
import ProductSection from './components/productSection'
import MainSpeaker from './components/mainSpeaker'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero/>
    <ProductSection/>
    <MainSpeaker/>
  </React.StrictMode>
)
