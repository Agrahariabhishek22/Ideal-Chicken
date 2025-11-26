import React from 'react'
import Hero from '../components/AboutComponents/Hero'
import AboutSection from '../components/AboutComponents/AboutSection'
import FoundersMessage from '../components/AboutComponents/FoundersMessage'
import PoultryEcosystem from '../components/AboutComponents/PoultryEcosystem'
import CompetitiveEdge from '../components/AboutComponents/CompetitiveEdge'
import Footer from '../components/CommonComponents/Footer'
import Journey from '../components/AboutComponents/Journey'
import QualityBanner from '../components/AboutComponents/QualityBanner'

const About = () => {
  return (
    <>
     <div >
      <div className='p-6'>
        <Hero
        badge="About us"
        title="A Legacy of Freshness, Trust, and Quality"
        subtitle="From farm to table, Ideal Chicken delivers premium, hygienic poultry sourced from trusted farms — combining tradition, care, and innovation in every cut."
      />
      </div>
      <AboutSection/>
      <FoundersMessage/>
      <PoultryEcosystem/>
      <Journey/>
      <CompetitiveEdge/>
      <QualityBanner/>
    </div>
      <Footer/>
      </>
  )
}

export default About
