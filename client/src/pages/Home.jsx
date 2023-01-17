import { Container } from '@chakra-ui/react'

import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Testimontials from './Testimontials';
import ThreeTierPricingHorizontal from './PricingFeature';
import NewsLetter from './Newsletter';
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Features />
        <Testimontials />
        <ThreeTierPricingHorizontal />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default Home