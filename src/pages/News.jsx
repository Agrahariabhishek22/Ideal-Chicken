import React from 'react'
import Navbar from '../components/CommonComponents/Navbar'
import Footer from '../components/CommonComponents/Footer'
import PressHero from '../components/NewsComponents/PressHero'
import PressSection from '../components/NewsComponents/PressSection'
import PhotoGallery from '../components/NewsComponents/PhotoGallery'

const News = () => {
  return (
    <div>
      <PressHero/>
      <PressSection/>
      <PhotoGallery/>
    </div>
  )
}

export default News
