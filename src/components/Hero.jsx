import React from 'react'
import HeroDetails from './HeroDetails'
import HeroImage from './HeroImage'
import ContactMe from './ContactMe'

export default function Hero() {
  return (
    <div className="hero">
        <HeroImage />
        <HeroDetails />
        <ContactMe />
    </div>
  )
}
