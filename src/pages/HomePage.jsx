import React from 'react'
import HeroSection from '../components/HomeComponents/HomeHero'
import AboutSection from '../components/HomeComponents/AboutSection'
import TestimonialsSection from '../components/HomeComponents/Testimonials'
import EcosystemSection from '../components/HomeComponents/EcosystemSection'
import PartnerSection from '../components/HomeComponents/PartnerSection'
import ProductSection from '../components/HomeComponents/ProductSection'
import FeatureSection from '../components/HomeComponents/FeatureSection'
import DistributionSection from '../components/HomeComponents/DistributionSection'
import ShopOnlineSection from '../components/HomeComponents/ShopOnlineSection'

const HomePage = () => {
  return (
    <>
    <HeroSection/>
     <AboutSection/>
     <TestimonialsSection/>
     <EcosystemSection/>
     <PartnerSection/>
     <ProductSection/>
     <FeatureSection/>
     <DistributionSection/>
     <ShopOnlineSection/>
    </>
     
  )
}

export default HomePage