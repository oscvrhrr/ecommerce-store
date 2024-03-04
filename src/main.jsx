import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/index.scss'
import Hero from './components/Hero'
import ProductSection from './components/productSection'
import MainSpeaker from './components/mainSpeaker'
import SecondarySpeaker from './components/SecondarySpeaker'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero/>
    <ProductSection/>
    <MainSpeaker/>
    <SecondarySpeaker/>
  </React.StrictMode>
)
