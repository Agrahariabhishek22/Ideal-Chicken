import React from 'react'
import Hero from '../components/AboutComponents/Hero'
import AboutSection from '../components/AboutComponents/AboutSection'
import FoundersMessage from '../components/AboutComponents/FoundersMessage'

const About = () => {
  return (
     <div className="p-6">
      <Hero
        badge="About us"
        title="A Legacy of Freshness, Trust, and Quality"
        subtitle="From farm to table, Ideal Chicken delivers premium, hygienic poultry sourced from trusted farms — combining tradition, care, and innovation in every cut."
      />
      <AboutSection/>
      <FoundersMessage/>

    </div>
  )
}

export default About
