import React from 'react'
import Hero from '../components/CommonComponents/Hero'
import AboutSection from '../components/AboutComponents/AboutSection'
import FoundersMessage from '../components/AboutComponents/FoundersMessage'
import PoultryEcosystem from '../components/AboutComponents/PoultryEcosystem'
import CompetitiveEdge from '../components/AboutComponents/CompetitiveEdge'
import Footer from '../components/CommonComponents/Footer'
import Journey from '../components/AboutComponents/Journey'
import QualityBanner from '../components/AboutComponents/QualityBanner'
import Navbar from '../components/CommonComponents/Navbar'

const About = () => {
  return (
    <>
     <div >
      <div className='px-6 mb-5 h-[374px]'>
        <Hero
        badge="About us"
        title="A Legacy of Freshness, Trust, and Quality"
        subtitle="From farm to table, Ideal Chicken delivers premium, hygienic poultry sourced from trusted farms — combining tradition, care, and innovation in every cut."
        img="/Left Block.png"
      />
      </div>
      <AboutSection/>
      <FoundersMessage/>
      <PoultryEcosystem/>
      <Journey/>
      <CompetitiveEdge/>
      <QualityBanner/>
    </div>
      </>
  )
}

export default About
