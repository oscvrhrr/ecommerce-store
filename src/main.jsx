import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/index.scss'
import Hero from './components/hero'
import ProductSection from './components/productSection'
import MainSpeaker from './components/mainSpeaker'
import SecondarySpeaker from './components/SecondarySpeaker'
import Earphone from './components/EarPhone'
import ProductBanner from './components/productBanner'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero/>
    <ProductSection/>
    <MainSpeaker/>
    <SecondarySpeaker/>
    <Earphone/>
    <ProductBanner/>
  </React.StrictMode>
)
